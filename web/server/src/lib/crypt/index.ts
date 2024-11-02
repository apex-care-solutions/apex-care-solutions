import bcrypt from 'bcrypt';
import { HASH_ROUNDS } from '../../utils/env';


export async function hashPassword(password: string): Promise<string> {
    try {
        const hashedPassword = await bcrypt.hash(password, HASH_ROUNDS);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password: ' + (error as Error).message);
    }
}

export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error verifying password: ' + (error as Error).message);
    }
}
