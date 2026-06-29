export declare class BrowserDetails extends null<String, any> {
    'ip': any | null;
    'phoneVerificationToken'?: any | null;
    'sessionID'?: any | null;
    'navigatorAgent'?: any | null;
    'referrer'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
