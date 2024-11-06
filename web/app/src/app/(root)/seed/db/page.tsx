import { redirect } from "next/navigation";
import { seedDb } from "../../../../../prisma/seed";

export default async function SeedPage() {
    await seedDb();
    redirect("/");
}
