export function JobStatusTrack({
    statuses,
}: {
    statuses: any & { timestamp: Date; status: string }[];
}) {
    return (
        <div className="w-full">
            <hr className="h-1.5 w-full bg-muted-foreground/30 border-none" />
            {statuses.map(
                (status: any & { timestamp: Date; status: string }) => (
                    <div>
                        <p>{status}</p>
                    </div>
                ),
            )}
        </div>
    );
}
