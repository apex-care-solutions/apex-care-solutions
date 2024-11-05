export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address?: string;
    avatar?: string;
    preferredContactMethod: ContactMethod;
    userType: UserType;
    createdAt: Date;
}

export enum UserType {
    ADMIN = "ADMIN",
    TECHNICIAN = "TECHNICIAN",
    HELPDESK_MANAGER = "HELPDESK_MANAGER",
    CUSTOMER = "CUSTOMER"
}

export enum ContactMethod {
    EMAIL = "EMAIL",
    PHONE = "PHONE",
    SMS = "SMS",
    NONE = "NONE"
}
