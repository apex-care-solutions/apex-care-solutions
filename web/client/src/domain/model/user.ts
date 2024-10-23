export class User {
    userId: string;
    name: string;
    email: string;
    phoneNumber: string;

    constructor(
        userId: string,
        name: string,
        email: string,
        phoneNumber: string,
    ) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
