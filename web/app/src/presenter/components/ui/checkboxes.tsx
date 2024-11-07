"use client";

import { cn } from "@/presenter/lib/utils";
import { useEffect, useState } from "react";

export function Checkboxes({
    data,
    onChange,
}: {
    data: string[];
    onChange: (data: string[]) => void;
}) {
    const [checks, setChecks] = useState<string[]>([]);
    useEffect(() => {
        onChange(checks);
    }, [checks]);

    return (
        <div
            className="grid w-full grid-flow-row auto-rows-fr gap-2.5"
            style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            }}
        >
            {data.map((instance) => {
                let checked = checks.includes(instance);
                return (
                    <div
                        key={instance}
                        className={cn(
                            "flex gap-2.5 px-5 py-5 border-border border-[1px] w-full rounded-sm drop-shadow-sm select-none cursor-pointer",
                            checked && "bg-muted ",
                        )}
                        onClick={() => {
                            let newChecks = [...checks].filter(
                                (entity) => entity !== instance,
                            );
                            console.log(instance);
                            if (!checked) newChecks.push(instance);
                            setChecks(newChecks);
                        }}
                    >
                        <p className="whitespace-nowrap font-bold">
                            {instance}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
