import { DynamicVoucherTemporalDecreaseFrequencyType } from './dynamicVoucherTemporalDecreaseFrequencyType';
export declare class WTDynamicVoucherCreateParams {
    'title': string;
    'notes': string;
    'paymentDesignID': string;
    'dateTimeStart': Date;
    'dateTimeExpiration': Date;
    'startingValue': number;
    'maxBudget': number;
    'decreaseAmount': number;
    'frequency': number;
    'frequencyType': DynamicVoucherTemporalDecreaseFrequencyType;
    'decreaseBy'?: number;
    'decreaseEvery'?: number;
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
