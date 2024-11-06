import OpenAI from 'openai';
import { OPENAI_SECRET } from '../../utils/env';
import { Service } from '../../domain/models';

const openai = new OpenAI({ apiKey: OPENAI_SECRET });

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface MaintenanceClassification {
    userReply: string;
    serviceName?: string;
    urgency?: string;
    prediction: boolean;
}

export async function classifyAndRespond(userMessage: string, chatHistory: ChatMessage[], services: Service[] | undefined): Promise<MaintenanceClassification> {
    let servicesOptions = services?.reduce((prev, curr) => prev + `, ${curr.name}`, "") || `'ELECTRICAL', 'PLUMBING', 'HVAC', 'GENERAL_MAINTAINANCE', 'IT_MAINTAINANCE'`
    chatHistory = [
        ...chatHistory,
        {
            content: `
                You are a polite and helpful maintenance service assistant. Respond in a friendly and proactive manner, taking charge of the conversation to guide the user toward a resolution.
    
                Your focus should be to:
                1. Greet the user warmly if it's their first message, showing readiness to assist if it is not the first message don't need to greet.
                2. Engage naturally, asking minimal questions, and infer the type of service required [${servicesOptions}] and urgency [1, 2, 3, 4, 5] (1: low, 5: high) from the context. Do not explicitly ask for urgency; instead, derive it from the user’s language and tone.
                3. Once you've inferred the service type and urgency, briefly summarize your understanding to the user, inviting confirmation if needed. Aim to make the user feel assured that you've understood their needs.
    
                Only include the JSON output if a prediction is made based on context. Ensure the JSON contains "prediction", "serviceName", and "urgency".
    
                Format your response as follows:
                - Conversational reply to the user.
                - Separate the reply from the JSON with "---".
                - The JSON should contain:
                  - "prediction": true or false (whether a classification was made).
                  - "serviceName": inferred job type.
                  - "urgency": inferred urgency level.
    
                User Message: ${userMessage}
    
                Reply:
            `,
            role: "user",
        },
    ];
    

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chatHistory,
        });

        const completionText = response.choices[0].message?.content;
        if (!completionText) throw new Error("No response from LLM");

        const [userReply, jsonPart] = completionText.split('---');

        if (!jsonPart) {
            console.warn("Warning: JSON part missing from LLM response.");
            return { userReply, prediction: false };
        }

        const jsonMatch = jsonPart.match(/{(.*?)}/s);
        if (!jsonMatch) {
            console.warn("Warning: JSON structure not found in LLM response.");
            return { userReply, prediction: false };
        }

        let parsedJSON;
        try {
            parsedJSON = JSON.parse(`{${jsonMatch[1]}}`);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            return { userReply, prediction: false };
        }
        const { prediction, serviceName, urgency } = parsedJSON;

        if (typeof prediction !== 'boolean' || !serviceName || !urgency) {
            console.warn("Warning: Incomplete prediction data from LLM response.");
            return { userReply, prediction: false };
        }

        return { userReply, serviceName, urgency, prediction };

    } catch (error) {
        console.error("Error with ChatGPT API:", error);
        throw new Error("Failed to process user message");
    }
}
