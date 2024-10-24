import "/src/globals.css";
import { ReactNode } from "react";

export function AuthContainer({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex-1 bg-black flex justify-center items-center login-container">
                <img
                    src="/assets/logo/apex-care-main-dark.svg"
                    alt="ApexLogo"
                />
            </div>
            <div className="flex flex-col gap-2 flex-1 bg-white justify-center items-center">
                {children}
            </div>
        </div>
    );
}
