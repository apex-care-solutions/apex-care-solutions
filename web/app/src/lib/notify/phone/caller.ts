import { INotifier } from "../i-notifier";
import { ICallable } from "./i-callable";

export class Caller implements INotifier {
    constructor(recepient: ICallable) {}
    async send(message: string) {
        throw new Error("Method not implemented!");
    }
}
