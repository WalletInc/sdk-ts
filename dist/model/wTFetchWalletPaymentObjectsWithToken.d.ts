export declare class WTFetchWalletPaymentObjectsWithToken extends null<String, any> {
    'phoneVerificationToken': any | null;
    'merchantID': string;
    'pageType': any | null;
    'isRefresh'?: any | null;
    'referrer'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
