import { useNavigate } from "react-router-dom";
import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { UserRoute } from "../data/services/apex-care-api/routes/user-routes";
import { User } from "../model/user";
import { IRepository } from "./repository";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { LoginData, RegisterData } from "../data/services/apex-care-api/routes/auth-route";

export class UserRepository implements IRepository<User> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<User>): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    // me(): Promise<void>{

    // }
    async register(userRegistration: RegisterData) : Promise<void>{
        let signIn = await this.apexCareApi.request("POST /auth/register",userRegistration)
        const navigate = useNavigate();
        if(signIn) navigate("/auth/login");    
    }

    async signIn(userLogin: LoginData) : Promise<void>{
        let signIn = await this.apexCareApi.request("POST /auth/signin",userLogin)
        const navigate = useNavigate();
        if(signIn) navigate("/");
    }

    async signOut() : Promise<boolean>{
        throw new Error("Method not implemented.");
    }
}
