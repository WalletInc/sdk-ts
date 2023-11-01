export declare class WTWalletItemRedemption {
    'checkAmount': number;
    'transactionNumber': string;
    'metaValue'?: string;
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
