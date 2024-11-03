export type ApexAPIResponse<T> = {
    success: boolean,
    statusCode: number,
    message?: string,
    data?: T,
    error?: string,
    redirect?: string
}


export const HTTP_STATUS_CODES = {
    OK: { statusCode: 200, message: "OK" },
    CREATED: { statusCode: 201, message: "Created" },
    ACCEPTED: { statusCode: 202, message: "Accepted" },
    NO_CONTENT: { statusCode: 204, message: "No Content" },

    // Redirect status codes
    MOVED_PERMANENTLY: { statusCode: 301, message: "Moved Permanently" },
    FOUND: { statusCode: 302, message: "Found" },
    SEE_OTHER: { statusCode: 303, message: "See Other" },
    TEMPORARY_REDIRECT: { statusCode: 307, message: "Temporary Redirect" },
    PERMANENT_REDIRECT: { statusCode: 308, message: "Permanent Redirect" },

    // Client error status codes
    BAD_REQUEST: { statusCode: 400, message: "Bad Request" },
    UNAUTHORIZED: { statusCode: 401, message: "Unauthorized" },
    FORBIDDEN: { statusCode: 403, message: "Forbidden" },
    NOT_FOUND: { statusCode: 404, message: "Not Found" },
    CONFLICT: { statusCode: 409, message: "Conflict" },
    UNPROCESSABLE_ENTITY: { statusCode: 422, message: "Unprocessable Entity" },

    // Server error status codes
    INTERNAL_SERVER_ERROR: { statusCode: 500, message: "Internal Server Error" },
    BAD_GATEWAY: { statusCode: 502, message: "Bad Gateway" },
    SERVICE_UNAVAILABLE: { statusCode: 503, message: "Service Unavailable" },
    GATEWAY_TIMEOUT: { statusCode: 504, message: "Gateway Timeout" },
};

