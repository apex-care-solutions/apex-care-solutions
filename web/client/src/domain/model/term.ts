export class Term {
    termId: string;
    term: string;
    relativeRate: number;

    constructor(termId: string, term: string, relativeRate: number) {
        this.termId = termId;
        this.term = term;
        this.relativeRate = relativeRate;
    }
}
