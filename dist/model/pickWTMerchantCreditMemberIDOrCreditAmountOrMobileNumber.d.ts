export declare class PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber {
    'memberID'?: string;
    'mobileNumber': string;
    'creditAmount': number;
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
