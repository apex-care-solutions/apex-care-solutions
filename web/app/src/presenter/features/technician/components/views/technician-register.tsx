import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";

import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";
import { TechnicianRepository, UserRepository } from "@/domain/repository";

const skillOptions = [
    { id: "plumbing", label: "Plumbing" },
    { id: "electrical", label: "Electrical" },
    { id: "carpentry", label: "Carpentry" },
    { id: "hvac", label: "HVAC" },
    { id: "painting", label: "Painting" },
];

export function TechnicianRegister() {
    const technicianRepository = new TechnicianRepository(apexCareApi);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Become a Technician</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register as Technician"}
                </Button>
            </CardFooter>
        </Card>
    );
}
