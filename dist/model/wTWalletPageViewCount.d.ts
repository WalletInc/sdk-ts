export declare class WTWalletPageViewCount {
    'walletObjectID': string;
    'count': number;
    'walletObjectName': string;
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
