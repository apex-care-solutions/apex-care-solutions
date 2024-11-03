import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { User } from "../model/user";
import { IRepository } from "./repository";
import { UserAuth } from "@/presenter/features/auth/context/auth-provider";
import { LoginData, RegisterData } from "../data/services/apex-care-api/routes/auth-route";
import { APIResponse } from "../data/services/api";

export class UserRepository implements IRepository<User> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        id;
        throw new Error("Method not implemented.");
    }
    create(entity: User): Promise<User> {
        entity;
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<User>): Promise<User | null> {
        id;
        entity;
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        id;
        throw new Error("Method not implemented.");
    }

    async register(userRegistration: RegisterData) : Promise<APIResponse<boolean>>{
        return await this.apexCareApi.request("POST /auth/register",userRegistration)
    }

    async signIn(userLogin: LoginData) : Promise<APIResponse<UserAuth>>{
        return await this.apexCareApi.request("POST /auth/signin",userLogin)
    }

    async signOut() : Promise<APIResponse<boolean>>{
        return await this.apexCareApi.request("POST /auth/signout")
    }

    async me() : Promise<APIResponse<UserAuth>>{
        return await this.apexCareApi.request("GET /auth/me")
    }
}
