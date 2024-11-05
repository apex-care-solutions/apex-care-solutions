import { io, Socket } from 'socket.io-client';


class SocketManager {
    socket: Socket | null = null;
    private url: string;
    private options: Record<string, unknown>;

    constructor(url: string, options: Record<string, unknown> = {}) {
        this.url = url;
        this.options = options;
    }

    connect(): void {
        if (this.socket) {
            console.warn("Socket is already connected.");
            return;
        }

        this.socket = io(this.url, {
            ...this.options,
            withCredentials: true,
        });

        this.setupListeners();
    }

    private setupListeners(): void {
        if (!this.socket) return;


        this.socket.on('error', (errorMessage) => {
            console.error('Error:', errorMessage);
        });

        this.socket.on('disconnect', (reason) => {
            console.log(`Socket disconnected: ${reason}`);
        });
    }

    sendMessage(message: string): void {
        this.socket?.emit('chatMessage', message);
    }

    disconnect(): void {
        if (!this.socket) {
            console.warn("No active socket connection to disconnect.");
            return;
        }
        this.socket.disconnect();
        this.socket = null;
    }
}

export default SocketManager;
