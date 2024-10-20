function requireEnv<T>(varName: string, defaultValue: T): T {
    let envVar = process.env[varName] as T;
    if (!envVar) {
        console.warn(
            `Environment variable \`${varName}\` is not set.\nReverting to default.`,
        );
        if (!defaultValue) {
            throw new Error(
                `ERROR: Environment variable \`${varName}\` default not set`,
            );
        }
        return defaultValue;
    }
    return envVar;
}

export const PORT = requireEnv<number>("PORT", 3333);
export const HOST = requireEnv<string>("HOST", "0.0.0.0");
