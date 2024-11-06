export type ChatAction<T> = {
    action: string;
    data: T;
    format: {
        meta?: string,
        title?: string,
        body?: string
        footer?: string
    }
    options: string[];
}

export type ChatActionResponse<T> = {
    action: string,
    option: string,
    data: T,
}