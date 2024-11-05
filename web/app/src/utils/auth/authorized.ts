import { Technician, User } from "@prisma/client";

export type AuthorizedUserRequest = {
    user: User;
};

export type AuthorizedTechnicianRequest = {
    technician: Technician;
};
