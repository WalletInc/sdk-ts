export declare class WTStaticVoucherCampaign {
    'id': string | null;
    'title': string;
    'notes': string;
    'valueType': string | null;
    'isLoaded': boolean;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'reinvestmentSum': number;
    'numberOfVouchersInFile': number;
    'isActive': boolean;
    'campaignGroupID'?: string;
    'bucket'?: string;
    'createdBySourceID': number;
    'originalFileName'?: string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'voucherType': number;
    'reinvestmentSumDecimal': string;
    'reinvestmentSumString': string;
    'startDate': Date;
    'expirationDate': Date;
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
