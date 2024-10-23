export class RequestMessage {
    requestMessageId: string;
    content: string;
    requestId: string;

    constructor(requestMessageId: string, content: string, requestId: string) {
        this.requestMessageId = requestMessageId;
        this.content = content;
        this.requestId = requestId;
    }
}
