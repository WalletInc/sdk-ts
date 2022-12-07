export declare class WTStaticVoucherCreateParams {
    'offerAmountCents': number;
    'memberID'?: string;
    'cellPhone': string;
    'campaignID': string | null;
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
