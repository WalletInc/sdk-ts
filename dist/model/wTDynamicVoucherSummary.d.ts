import { WTDynamicVoucherSummaryStatus } from './wTDynamicVoucherSummaryStatus';
export declare class WTDynamicVoucherSummary extends null<String, any> {
    'calcError': any | null;
    'calcErrorDetails': any | null;
    'currentValue': any | null;
    'currentValueDecimal': any | null;
    'currentValueString': any | null;
    'timeValueZero': any | null;
    'timeValueZeroSubtractedAmount': any | null;
    'totalNumberRedeemed': any | null;
    'totalValueRedeemed': any | null;
    'totalBudgetRemaining': any | null;
    'maximumBudgetExhausted': any | null;
    'maximumBudgetExhaustedBy': any | null;
    'maximumBudgetExhaustedByDecimal': any | null;
    'maximumBudgetExhaustedByString': any | null;
    'maximumBudgetExhaustedTotalValueRedeemed': any | null;
    'maximumBudgetExhaustedTotalValueRedeemedDecimal': any | null;
    'maximumBudgetExhaustedTotalValueRedeemedString': any | null;
    'totalAmountSubtracted': any | null;
    'totalAmountSubtractedDecimal': any | null;
    'totalAmountSubtractedString': any | null;
    'totalDecrementedMultiple': any | null;
    'redeemedKeys': any | null;
    'status': WTDynamicVoucherSummaryStatus;
    'expired': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
