export declare class CreateStaticVoucherCampaignWithVoucherWithCSV {
    'startDateTime': Date;
    'expirationDateTime': Date;
    'title': string;
    'notes': string;
    'valueType': string | null;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'isActive': boolean;
    'bucket': string;
    'fileName': string;
    'sourceID': number;
    'campaignGroupID'?: string | null;
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
