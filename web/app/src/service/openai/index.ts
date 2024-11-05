import OpenAI from 'openai';
import { OPENAI_SECRET } from '../../utils/env';

const openai = new OpenAI({ apiKey: OPENAI_SECRET });

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface MaintenanceClassification {
    userReply: string;
    jobType?: string;
    urgency?: string;
    prediction: boolean;
}

export async function classifyAndRespond(userMessage: string, chatHistory: ChatMessage[]): Promise<MaintenanceClassification> {
    chatHistory = [...chatHistory, {
        content: `
            You are a maintenance service assistant. Respond naturally to help the user, without mentioning any classification or assignment tasks.
            
            Focus on:
            1. Conversing to understand the user's concern without probing for specifics, determining job type [ELECTRICAL, PLUMBING, HVAC, GENERAL_MAINTENANCE, IT_MAINTENANCE] and urgency [HIGH, MEDIUM, LOW] from context alone.
            2. If the user suggests what they need, evaluate its feasibility and act if appropriate.
            3. When you can determine the job type and urgency, respond with a natural suggestion or reassurance for next steps.

            Format response as follows:
            - Natural conversational reply to the user.
            - Separate your reply from the JSON output with "-----".
            - The JSON object should contain:
              - "prediction": true or false to indicate if classification was made.
              - "jobType": job type determined from context.
              - "urgency": urgency level based on the user's request.

            User Message: ${userMessage}

            Reply:
        `,
        role: "user"
    }];

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chatHistory,
        });

        const completionText = response.choices[0].message?.content;
        if (!completionText) throw new Error("No response from LLM");

        const [userReply, jsonPart] = completionText.split('-----');

        if (!jsonPart) return { userReply, prediction: false };

        const jsonMatch = jsonPart.match(/{(.*?)}/s);

        if (!jsonMatch) return { userReply, prediction: false };

        let parsedJSON;
        try {
            parsedJSON = JSON.parse(`{${jsonMatch[1]}}`);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            throw new Error("Failed to parse JSON from LLM response");
        }

        const { prediction, jobType, urgency } = parsedJSON;
        if (prediction === undefined || !jobType || !urgency) {
            throw new Error("Incomplete prediction data from LLM");
        }

        return { userReply, jobType, urgency, prediction };

    } catch (error) {
        console.error("Error with ChatGPT API:", error);
        throw new Error("Failed to process user message");
    }
}
