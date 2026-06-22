export interface IJiraAuthToken {
    accessToken: string;
    cloudID: string;
    refreshToken?: string;
    expiresIn?: number;
    scope?: string;
    tokenType?: string;
    createdAt: string;
    updatedAt: string;
}
