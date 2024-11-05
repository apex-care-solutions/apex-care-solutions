async function hashPassword(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(byte => String.fromCharCode(byte)).join('');
    return hashedPassword;
  }
  
  export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const hashedSuppliedPassword = await hashPassword(plainPassword);
    return hashedPassword === hashedSuppliedPassword;
  }