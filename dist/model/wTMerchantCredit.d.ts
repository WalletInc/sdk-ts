export declare class WTMerchantCredit {
    'id': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'mobileNumber': string;
    'creditAmount': number;
    'memberID'?: string;
    'creditAmountDecimal': string;
    'creditAmountString': string;
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
