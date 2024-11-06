import { Button } from "@/presenter/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Checkbox } from "@/presenter/components/ui/checkbox";
import { prisma } from "@/repository/database";
import { Checkboxes } from "./_components/checkboxes";

export default async function Page() {
    const services = await prisma.service.findMany();
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Become a Technician</CardTitle>
                    <CardDescription>
                        Join us on our adventure bringing high quality
                        maintainance services on the fly to our customers.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        Please select the skills and services that you can
                        provide.
                    </p>
                    <div>
                        <Checkboxes data={services} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Join The Mission</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
