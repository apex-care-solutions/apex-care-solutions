export class User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    location: string;

    constructor(
        userId: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        location: string
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
    }
}
