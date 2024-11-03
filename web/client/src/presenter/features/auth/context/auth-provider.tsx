import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export type UserAuth = {
    id: string;
    username: string;
    avatar: string;
    roles: string[];
    address: string;
};

const AuthContext = createContext<
    [
        UserAuth | undefined,
        React.Dispatch<React.SetStateAction<UserAuth | undefined>>,
    ]
>([undefined, () => {}]);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [userAuth, setUserAuth] = useState<UserAuth | undefined>({
        id: "1",
        avatar: "",
        roles: [],
        username: "Werner",
        address:
            "124 Kingdoepking Street, Riley Avenue, Pietermaritzburg, 3201",
    });

    useEffect(() => {}, []);

    return (
        <AuthContext.Provider value={[userAuth, setUserAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

export function useSession() {
    const userAuth = useContext(AuthContext);
    return userAuth;
}
