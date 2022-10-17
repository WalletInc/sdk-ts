export declare class WTAuthenticationSSOLoginForDiscourse {
    'username': string;
    'password': string;
    'ssoPayload': string;
    'sigPayload': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
