"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { contactMethod, userType } from "@/domain/models";

export type UserAuth = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string | null;
    address: string | null;
    preferredContactMethod: contactMethod;
    userType: userType;
    createdAt: Date;
};

const AuthContext = createContext<
    [
        UserAuth | undefined,
        React.Dispatch<React.SetStateAction<UserAuth | undefined>>,
    ]
>([undefined, () => {}]);

export function AuthProvider({
    user,
    children,
}: {
    user: UserAuth | undefined;
    children: ReactNode;
}) {
    const [userAuth, setUserAuth] = useState<UserAuth | undefined>(user);
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
