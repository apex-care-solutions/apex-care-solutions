import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";
import { UserRepository } from "@/domain/repository";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Loading } from "../../core/views/loading";

export type UserAuth = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string | null;
    address: string | null;
    preferredContactMethod: "NONE" | "EMAIL" | "PHONE" | "SMS";
    userType: "ADMIN" | "TECHNICIAN" | "HELPDESK_MANAGER" | "CUSTOMER";
    createdAt: Date;
};

const AuthContext = createContext<
    [
        UserAuth | undefined,
        React.Dispatch<React.SetStateAction<UserAuth | undefined>>,
    ]
>([undefined, () => {}]);

export function AuthProvider({ children }: { children: ReactNode }) {
    const userRepository = new UserRepository(apexCareApi);
    const [userAuth, setUserAuth] = useState<UserAuth | undefined>(undefined);
    const [authLoaded, setAuthLoaded] = useState<boolean>(false);

    useEffect(() => {
        userRepository
            .me()
            .then((res) => {
                setUserAuth(res.data);
            })
            .finally(() => {
                setAuthLoaded(true);
            });
    }, []);

    return (
        <AuthContext.Provider value={[userAuth, setUserAuth]}>
            {authLoaded ? children : <Loading />}
        </AuthContext.Provider>
    );
}

export function useSession() {
    const userAuth = useContext(AuthContext);
    return userAuth;
}
