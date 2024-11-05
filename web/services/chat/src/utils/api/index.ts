export type APIResponse = {
    success: boolean,
    statusCode: number,
    message?: string,
    data?: any,
    error?: string,
    redirect?: string
}

export const createApexResponse = (status: keyof typeof HTTP_STATUS_CODES, data?: any, error?: string, redirect?: string) => ({...HTTP_STATUS_CODES[status], data, error, redirect})


export const HTTP_STATUS_CODES = {
    OK: { statusCode: 200, message: "OK", success: true },
    CREATED: { statusCode: 201, message: "Created", success: true  },
    ACCEPTED: { statusCode: 202, message: "Accepted",success: true  },
    NO_CONTENT: { statusCode: 204, message: "No Content",success: true  },

    // Redirect status codes
    MOVED_PERMANENTLY: { statusCode: 301, message: "Moved Permanently" },
    FOUND: { statusCode: 302, message: "Found" },
    SEE_OTHER: { statusCode: 303, message: "See Other" },
    TEMPORARY_REDIRECT: { statusCode: 307, message: "Temporary Redirect" },
    PERMANENT_REDIRECT: { statusCode: 308, message: "Permanent Redirect" },

    // Client error status codes
    BAD_REQUEST: { statusCode: 400, message: "Bad Request",success: false  },
    UNAUTHORIZED: { statusCode: 401, message: "Unauthorized",success: false },
    FORBIDDEN: { statusCode: 403, message: "Forbidden", success: false },
    NOT_FOUND: { statusCode: 404, message: "Not Found", success: false },
    CONFLICT: { statusCode: 409, message: "Conflict", success: false },
    UNPROCESSABLE_ENTITY: { statusCode: 422, message: "Unprocessable Entity", success: false },

    // Server error status codes
    INTERNAL_SERVER_ERROR: { statusCode: 500, message: "Internal Server Error",success: false },
    BAD_GATEWAY: { statusCode: 502, message: "Bad Gateway",success: false },
    SERVICE_UNAVAILABLE: { statusCode: 503, message: "Service Unavailable",success: false },
    GATEWAY_TIMEOUT: { statusCode: 504, message: "Gateway Timeout",success: false },
} as const;

