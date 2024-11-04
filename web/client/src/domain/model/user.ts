export class User {
    userId: string;
    username: string
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;

    constructor(
        userId: string,
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        address: string
    ) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
