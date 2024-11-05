import jwt from "jsonwebtoken";

export type UserPayload = {
    id: string,
    username: string, 
    avatar: string,
    name: string, 
    surname: string,
    email: string,
    location: string,
    phone: string,
    roles: string[],
}

const encode = (user: UserPayload): string => {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '12h' });
};

const decode = (token: string): UserPayload | null => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    } catch (err) {
        return null; 
    }
};