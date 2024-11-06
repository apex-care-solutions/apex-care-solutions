"use client";
import { Checkbox } from "@/presenter/components/ui/checkbox";
import { useState } from "react";

export function Checkboxes({ data }: { data: any[] }) {
    const [checks, setChecks] = useState<string[]>([]);
    return (
        <div>
            {data.map((instance) => (
                <Checkbox
                    onCheckedChange={(checked) => {
                        let newChecks = [...checks];
                        newChecks.filter((entity) => entity != instance);
                        if (checked) newChecks.push(instance);
                        setChecks(newChecks);
                    }}
                >
                    {instance}
                </Checkbox>
            ))}
        </div>
    );
}
