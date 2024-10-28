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

/*** DATABASE ***/
export const DATABASE_URL = requireEnv<string>(
    "DATABASE_URL",
    "postgres://apex_admin:apex_admin@postgres:5432/apex_care_db",
);

/*** SERVICES ***/
/** WHATSAPP API **/
export const S_WA_TOKEN = requireEnv<string>("S_WA_TOKEN", "S_WA_TOKEN");
export const S_WA_PHONE_ID = requireEnv<string>(
    "S_WA_PHONE_ID",
    "S_WA_PHONE_ID",
);

export const S_WA_ACCOUNT_NUMBER = requireEnv<string>(
    "S_WA_ACCOUNT_NUMBER",
    "S_WA_ACCOUNT_NUMBER",
);

export const S_WA_JOB_NOTIFY = requireEnv<string>(
    "S_WA_JOB_NOTIFY",
    "S_WA_JOB_NOTIFY",
);
