export declare class CreateStaticVoucherCampaignWithVoucher {
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
    'sourceID': number;
    'cellPhone'?: string;
    'memberID'?: string;
    'offerAmountCents': number;
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
