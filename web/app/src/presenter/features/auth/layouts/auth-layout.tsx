import { ReactNode } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex-1 bg-primary grid grid-rows-3 login-container w-full">
                <div className="w-full p-5">
                    <Link href="/">
                        <X className="text-primary-foreground" />
                    </Link>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src="/assets/logo/apex-care-main-dark.svg"
                        alt="ApexLogo"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 bg-white justify-center items-center">
                {children}
            </div>
        </div>
    );
}
