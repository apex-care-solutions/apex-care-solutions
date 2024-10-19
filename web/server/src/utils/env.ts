function requireEnv(varName: string, defaultValue?: string | number) {
    let envVar = process.env[varName];
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

export const PORT = requireEnv("PORT", 3333);
