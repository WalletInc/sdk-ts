export declare class WTAuthenticationSSOLoginForDiscourse extends null<String, any> {
    'username': any | null;
    'password': any | null;
    'ssoPayload': string;
    'sigPayload': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
