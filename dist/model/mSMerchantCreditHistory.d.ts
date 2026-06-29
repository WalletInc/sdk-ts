export declare class MSMerchantCreditHistory extends null<String, any> {
    'memberIdentifier'?: any | null;
    'mobileNumber': any | null;
    'creditAmount': any | null;
    'id': any | null;
    'merchantCreditID': string;
    'merchantID': string;
    'createdAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
