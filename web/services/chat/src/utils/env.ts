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

/*** SERVER ***/
export const PORT = requireEnv<number>("PORT", 3333);
export const HOST = requireEnv<string>("HOST", "0.0.0.0");
export const URL = requireEnv<string>("URL", "http://localhost");

/*** ENCRYPTION ***/
export const JWT_SECRET = requireEnv<string>("JWT_SECRET", "JWT_SECRET");
export const ALLOWED_ORIGIN = requireEnv<string>("ALLOWED_ORIGIN", "http://localhost:3000");

/*** SERVICES ***/
/** OPEN AI API **/
export const OPENAI_SECRET = requireEnv<string>("OPENAI_SECRET", "");
export const APEX_CARE_API_BASE_URL = requireEnv<string>("APEX_CARE_API_BASE_URL", "http://app:3000/api/v1");