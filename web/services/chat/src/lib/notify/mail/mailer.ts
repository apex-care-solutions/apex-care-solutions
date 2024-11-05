import { INotifier } from "../i-notifier";
import { IMailable } from "./i-mailable";

export class Mailer implements INotifier {
    constructor(recepient: IMailable) {}
    async send(message: String) {
        throw new Error("Method not implemented!");
    }
}
