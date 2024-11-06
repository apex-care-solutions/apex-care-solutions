export interface Job {
    id: number;
    userId: number;
    technicianId?: number;
    description: string;
    createdAt: Date;
    urgency: number;
    serviceName: string;
    chatId: number;
}
