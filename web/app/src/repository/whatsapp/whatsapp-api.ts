import { WhatsAppMessagePayload } from "./i-whatsapp-message-payload";

export class WhatsAppAPI {
    private phoneNumberId: string;
    private accessToken: string;

    constructor(phoneNumberId: string, accessToken: string) {
        this.phoneNumberId = phoneNumberId;
        this.accessToken = accessToken;
    }

    async sendTextMessage(recipient: string, message: string): Promise<void> {
        const payload: WhatsAppMessagePayload = {
            messaging_product: "whatsapp",
            to: recipient,
            type: "text",
            text: { body: message },
        };

        await this.postMessage(payload);
    }

    async sendTemplateMessage(
        recipient: string,
        templateName: string,
        templateLanguage: string,
        components: any[] = [],
    ): Promise<void> {
        const payload: WhatsAppMessagePayload = {
            messaging_product: "whatsapp",
            to: recipient,
            type: "template",
            template: {
                name: templateName,
                language: { code: templateLanguage },
                components: components,
            },
        };

        await this.postMessage(payload);
    }

    private async postMessage(payload: WhatsAppMessagePayload): Promise<void> {
        const url = `https://graph.facebook.com/v17.0/${this.phoneNumberId}/messages`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error sending message:", errorData);
                throw new Error("Failed to send WhatsApp message");
            }

            const data = await response.json();
            console.log("Message sent successfully:", data);
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
}


