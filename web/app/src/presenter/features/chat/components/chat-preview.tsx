export function ChatPreview() {
    return (
        <div className="flex max-w-sm space-x-4 items-center border-t-2 py-5">
            <div className="bg-primary rounded-full w-12 h-12"></div>
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-between">
                    <div className="font-semibold">Werner Jvr</div>
                    <div className="text-sm text-gray-500">Maintenance</div>
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    maiores architecto cum iusto ab amet inventore adipisci
                    dolorem, repellendus porro. Blanditiis molestiae corporis
                    labore animi, ex aliquid impedit natus fugit!
                </p>
            </div>
        </div>
    );
}
