import { INotifier } from "./i-notifier";
import { INotifyable } from "./i-notifyable";
import { Mailer } from "./mail/mailer";
import { Messanger } from "./message/messanger";
import { Caller } from "./phone/caller";

export function notifierFactory(
    method: "EMAIL" | "PHONE" | "SMS" | "NONE",
    recepient: INotifyable,
): INotifier {
    const notificationMethods = {
        SMS: new Messanger(recepient),
        EMAIL: new Mailer(recepient),
        PHONE: new Caller(recepient),
        NONE: null,
    };

    const notificationMethod = notificationMethods[method];

    if (!notificationMethod)
        throw new Error("Recepient does not allow notifications!");

    return notificationMethod;
}
