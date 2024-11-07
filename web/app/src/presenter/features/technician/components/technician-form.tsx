"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Service } from "@prisma/client";
import { Button } from "@/presenter/components/ui/button";
import { Checkboxes } from "@/presenter/components/ui/checkboxes";
import { useState } from "react";
import { registerTechnicianMe } from "@/presenter/actions/technician-actions";
import { getAuthUser } from "@/presenter/actions/auth-actions";
import { useSession } from "../../auth/context/auth-provider";

export function TechnicianForm({
    serviceOptions,
}: {
    serviceOptions: Service[];
}) {
    const [services, setServices] = useState<string[]>([]);
    const [authUser, setAuthUser] = useSession();

    async function handleRegisterTechnician() {
        let { data: technician, redirect } = await registerTechnicianMe(
            services,
        );
        if (technician) {
            let { data: authUser } = await getAuthUser();
            if (authUser) setAuthUser(authUser);
            if (redirect) window.location.href = redirect;
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Become a Technician</CardTitle>
                <CardDescription>
                    Join us on our adventure bringing high quality maintainance
                    services on the fly to our customers.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <p>
                    Please select the skills and services that you can provide.
                </p>
                <Checkboxes
                    onChange={setServices}
                    data={serviceOptions.map((service) => service.name)}
                />
            </CardContent>
            <CardFooter>
                <Button onClick={handleRegisterTechnician}>
                    Join The Mission
                </Button>
            </CardFooter>
        </Card>
    );
}
