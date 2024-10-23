export class Technician {
    technicianId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    company: string;

    constructor(
        technicianId: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        location: string,
        company: string,
    ) {
        this.technicianId = technicianId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.company = company;
    }
}
