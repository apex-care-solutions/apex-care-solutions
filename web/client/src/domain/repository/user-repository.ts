import { User } from "../model/user";
import { IRepository } from "./repository";

export interface IUserRepository extends IRepository<User> {
    findByEmail(email: string): Promise<User | null>;
}
