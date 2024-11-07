import { ReactNode } from "react";
import { Card } from "@/presenter/components/ui/card";
import { SettingsCard } from "../../auth/components/settings-card";

export function AccountLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex gap-5 flex-1">
            <Card className="basis-1/5">
                <SettingsCard />
            </Card>
            <Card className="basis-4/5">{children}</Card>
        </div>
    );
}
