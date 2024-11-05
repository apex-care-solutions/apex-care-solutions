export interface WhatsAppMessagePayload {
    messaging_product: "whatsapp";
    to: string;
    type: "text" | "template";
    text?: { body: string };
    template?: {
        name: string;
        language: { code: string };
        components?: any[];
    };
}





