import { TechnicianForm } from "../components/technician-form";
import { prisma } from "@/repository/database";

export async function TechnicianRegisterView() {
    const services = await prisma.service.findMany();
    return (
        <div>
            <TechnicianForm serviceOptions={services} />
        </div>
    );
}
