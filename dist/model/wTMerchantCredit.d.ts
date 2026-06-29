export declare class WTMerchantCredit extends null<String, any> {
    'id': string;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'mobileNumber': any | null;
    'creditAmount': any | null;
    'memberID'?: any | null;
    'creditAmountDecimal': any | null;
    'creditAmountString': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
