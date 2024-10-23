export class Service {
    serviceId: string;
    name: string;
    description: string;

    constructor(serviceId: string, name: string, description: string) {
        this.serviceId = serviceId;
        this.name = name;
        this.description = description;
    }
}
