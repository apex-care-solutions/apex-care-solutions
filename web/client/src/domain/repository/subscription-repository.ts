import { Subscription } from "../model/subscription";
import { IRepository } from "./repository";

export interface ISubscriptionRepository extends IRepository<Subscription> {
    findByClientId(clientId: string): Promise<Subscription | null>;
}
