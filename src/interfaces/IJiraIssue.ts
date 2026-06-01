export interface IJiraIssue {
    projectKey: string;
    summary: string;
    issueType: string;
    description?: string;
}

export interface IJiraIssueResponse {
    id: string;
    key: string;
    issueURL: string;
}
