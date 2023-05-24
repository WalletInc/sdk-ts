export declare class WTDynamicVoucherSummary {
    'calcError': boolean;
    'calcErrorDetails': string;
    'currentValue': number;
    'currentValueDecimal': string;
    'currentValueString': string;
    'timeValueZero': boolean;
    'timeValueZeroSubtractedAmount': number;
    'totalNumberRedeemed': number;
    'totalValueRedeemed': number;
    'totalBudgetRemaining': number;
    'maximumBudgetExhausted': boolean;
    'maximumBudgetExhaustedBy': number;
    'maximumBudgetExhaustedByDecimal': string;
    'maximumBudgetExhaustedByString': string;
    'maximumBudgetExhaustedTotalValueRedeemed': number;
    'maximumBudgetExhaustedTotalValueRedeemedDecimal': string;
    'maximumBudgetExhaustedTotalValueRedeemedString': string;
    'totalAmountSubtracted': number;
    'totalAmountSubtractedDecimal': string;
    'totalAmountSubtractedString': string;
    'totalDecrementedMultiple': number;
    'redeemedKeys': Array<string>;
    'status': string | null;
    'expired': boolean;
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
