export declare class WTFetchWalletPaymentObjectWithToken {
    'phoneVerificationToken': string;
    'merchantID': string;
    'pageType': string;
    'isRefresh'?: boolean;
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
