export declare class WTMerchantURLPathRequest extends null<String, any> {
    'ip': string;
    'phoneVerificationToken'?: string;
    'sessionID'?: string;
    'navigatorAgent'?: string;
    'referrer'?: string;
    'merchantID': any | null;
    'path': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
