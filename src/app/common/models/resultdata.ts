export interface DashboardData {
    size: number;
    nextOffset: string;
    elements: Element[];
}

export interface Element {
    id: string;
    source: string;
    sourceIdentityId: string;
    reference: Reference;
    state: string;
    payload: Payload;
    created: Date;
}
export interface Reference {
    referenceId: string;
    referenceType: string;
}

export interface Payload {
    source: string;
    reportType: string;
    message: string;
    reportId: string;
    referenceResourceId: string;
    referenceResourceType: string;
}


