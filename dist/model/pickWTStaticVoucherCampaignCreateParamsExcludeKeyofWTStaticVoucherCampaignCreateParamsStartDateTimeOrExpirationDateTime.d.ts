export declare class PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime {
    'title': string;
    'notes': string;
    'valueType': string | null;
    'isLoaded': boolean;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'isActive': boolean;
    'campaignGroupID'?: string;
    'bucket'?: string;
    'createdBySourceID': number;
    'originalFileName'?: string;
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
