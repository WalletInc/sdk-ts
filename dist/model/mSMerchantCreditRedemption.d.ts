export declare class MSMerchantCreditRedemption {
    'transactionID': string;
    'transactionType': string | null;
    'amount': number;
    'registerID'?: string | number | null;
    'terminalType': string;
    'id': string;
    'merchantCreditID': string;
    'merchantID': string;
    'createdAt': Date;
    'isActive': boolean;
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
