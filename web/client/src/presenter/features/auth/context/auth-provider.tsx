import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export type UserAuth = {
    username: string;
    avatar: string;
    roles: string[];
};

const AuthContext = createContext<
    [
        UserAuth | undefined,
        React.Dispatch<React.SetStateAction<UserAuth | undefined>>,
    ]
>(useState<UserAuth | undefined>(undefined));

export function AuthProvider({ children }: { children: ReactNode }) {
    const [userAuth, setUserAuth] = useState<UserAuth | undefined>(undefined);

    useEffect(() => {}, []);

    return (
        <AuthContext.Provider value={[userAuth, setUserAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

export function useSession() {
    const [userAuth, setUserAuth] = useContext(AuthContext);
    return [userAuth, setUserAuth];
}
