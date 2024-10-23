import { Subscription } from "./subscription";

export interface User {
    clientId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    subscription?: Subscription;
}
