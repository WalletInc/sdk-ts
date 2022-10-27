export declare class WTDynamicVoucherUpdateParams {
    'title': string;
    'notes': string;
    'paymentDesignID': string;
    'dateTimeStart': Date;
    'dateTimeExpiration': Date;
    'startingValue': number;
    'maxBudget': number;
    'decreaseAmount': number;
    'frequency': number;
    'frequencyType': string | null;
    'decreaseBy'?: number;
    'decreaseEvery'?: number;
    'isActive': boolean;
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
