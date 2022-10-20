import { WTDynamicVoucherSummary } from './wTDynamicVoucherSummary';
export declare class DynamicVoucher {
    'startDate': Date;
    'expirationDate': Date;
    'id': string | null;
    'title': string;
    'notes': string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'startingValue': number;
    'maxBudget': number;
    'temporalDecreaseAmount': number;
    'temporalDecreaseFrequency': number;
    'numericalDecreaseAmount'?: number;
    'numericalDecreaseFrequency'?: number;
    'temporalDecreaseAmountDecimal': string;
    'temporalDecreaseAmountString': string;
    'numericalDecreaseAmountDecimal': string;
    'numericalDecreaseAmountString': string;
    'startingValueDecimal': string;
    'startingValueString': string;
    'maxBudgetDecimal': string;
    'maxBudgetString': string;
    'currentValue': number;
    'currentValueDecimal': string;
    'currentValueString': string;
    'status': string | null;
    'temporalDecreaseFrequencyType': string | null;
    'summary': WTDynamicVoucherSummary;
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
