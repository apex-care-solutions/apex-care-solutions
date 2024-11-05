export function withErrorHandling(handler: Function) {
    return async (socket: any, ...args: any[]) => {
        try {
            await handler(socket, ...args);
        } catch (error) {
            console.error("Socket error:", error);
            socket.emit("error", "An error occurred.");
        }
    };
}
