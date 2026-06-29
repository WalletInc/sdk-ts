"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucherSummary = void 0;
class WTDynamicVoucherSummary extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTDynamicVoucherSummary.attributeTypeMap);
    }
}
exports.WTDynamicVoucherSummary = WTDynamicVoucherSummary;
WTDynamicVoucherSummary.discriminator = undefined;
WTDynamicVoucherSummary.attributeTypeMap = [
    {
        "name": "calcError",
        "baseName": "calcError",
        "type": "any"
    },
    {
        "name": "calcErrorDetails",
        "baseName": "calcErrorDetails",
        "type": "any"
    },
    {
        "name": "currentValue",
        "baseName": "currentValue",
        "type": "any"
    },
    {
        "name": "currentValueDecimal",
        "baseName": "currentValue_decimal",
        "type": "any"
    },
    {
        "name": "currentValueString",
        "baseName": "currentValue_string",
        "type": "any"
    },
    {
        "name": "timeValueZero",
        "baseName": "timeValueZero",
        "type": "any"
    },
    {
        "name": "timeValueZeroSubtractedAmount",
        "baseName": "timeValueZeroSubtractedAmount",
        "type": "any"
    },
    {
        "name": "totalNumberRedeemed",
        "baseName": "totalNumberRedeemed",
        "type": "any"
    },
    {
        "name": "totalValueRedeemed",
        "baseName": "totalValueRedeemed",
        "type": "any"
    },
    {
        "name": "totalBudgetRemaining",
        "baseName": "totalBudgetRemaining",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhausted",
        "baseName": "maximumBudgetExhausted",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedBy",
        "baseName": "maximumBudgetExhaustedBy",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedByDecimal",
        "baseName": "maximumBudgetExhaustedBy_decimal",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedByString",
        "baseName": "maximumBudgetExhaustedBy_string",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemed",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemedDecimal",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed_decimal",
        "type": "any"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemedString",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed_string",
        "type": "any"
    },
    {
        "name": "totalAmountSubtracted",
        "baseName": "totalAmountSubtracted",
        "type": "any"
    },
    {
        "name": "totalAmountSubtractedDecimal",
        "baseName": "totalAmountSubtracted_decimal",
        "type": "any"
    },
    {
        "name": "totalAmountSubtractedString",
        "baseName": "totalAmountSubtracted_string",
        "type": "any"
    },
    {
        "name": "totalDecrementedMultiple",
        "baseName": "totalDecrementedMultiple",
        "type": "any"
    },
    {
        "name": "redeemedKeys",
        "baseName": "redeemedKeys",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTDynamicVoucherSummaryStatus"
    },
    {
        "name": "expired",
        "baseName": "expired",
        "type": "any"
    }
];
//# sourceMappingURL=wTDynamicVoucherSummary.js.map