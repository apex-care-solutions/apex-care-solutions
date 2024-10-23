import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { UserRoute } from "../data/services/apex-care-api/routes/user-routes";
import { User } from "../model/user";
import { IRepository } from "./repository";

export class UserRepository implements IRepository<User> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<User[]> {
        return await this.apexCareApi.request<UserRoute>("GET /users");
    }

    async findById(id: string): Promise<User | null> {
        try {
            return await this.apexCareApi.request<UserRoute>(
                "GET /users/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: User): Promise<User> {
        return await this.apexCareApi.request<UserRoute>(
            "POST /users",
            undefined,
            undefined,
            entity,
            
        );
    }

    async update(id: string, entity: Partial<User>): Promise<User | null> {
        try {
            return await this.apexCareApi.request<UserRoute>(
                "PUT /users/:id",
                { id },
                undefined,
                entity,
            );
        } catch {
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.apexCareApi.request<UserRoute>(
                "DELETE /users/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
