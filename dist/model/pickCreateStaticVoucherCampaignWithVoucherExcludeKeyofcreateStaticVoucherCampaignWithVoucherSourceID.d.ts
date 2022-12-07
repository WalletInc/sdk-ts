export declare class PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID {
    'title': string;
    'notes': string;
    'valueType': string | null;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'startDateTime': Date;
    'expirationDateTime': Date;
    'memberID'?: string;
    'offerAmountCents': number;
    'cellPhone'?: string;
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
