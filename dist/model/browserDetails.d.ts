export declare class BrowserDetails {
    'ip': string;
    'phoneVerificationToken'?: string;
    'sessionID'?: string;
    'navigatorAgent'?: string;
    'referrer'?: string;
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
