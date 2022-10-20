export declare class MSMerchantCreditHistory {
    'memberIdentifier'?: string;
    'mobileNumber': string;
    'creditAmount': number;
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
