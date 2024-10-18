function requireEnv(varName: string, defaultValue: string | number) {
    let envVar = process.env[varName];
    if (!envVar) {
        console.warn(
            `Environment variable \`${varName}\` is not set reverting to default.`,
        );
        return defaultValue;
    }
    return envVar;
}

export const PORT = requireEnv("PORT", 3000);
