export declare class WTAdvertisementCreditUpdateParams {
    'title': string;
    'valueType': string | null;
    'paymentDesignID': string;
    'maxUses': number;
    'discountValue': number;
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
