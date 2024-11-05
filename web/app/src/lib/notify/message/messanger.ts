import { whatsappAPI } from "@/repository/whatsapp";
import { INotifier } from "../i-notifier";
import { IMessageable } from "./i-messageable";

export class Messanger implements INotifier {
    constructor(protected recepient: IMessageable) {}
    async send(message: string) {
        await whatsappAPI.sendTextMessage(this.recepient.phone, message);
    }
}


