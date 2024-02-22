"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTDynamicVoucherSummary {
    static getAttributeTypeMap() {
        return WTDynamicVoucherSummary.attributeTypeMap;
    }
}
WTDynamicVoucherSummary.discriminator = undefined;
WTDynamicVoucherSummary.attributeTypeMap = [
    {
        "name": "calcError",
        "baseName": "calcError",
        "type": "boolean"
    },
    {
        "name": "calcErrorDetails",
        "baseName": "calcErrorDetails",
        "type": "string"
    },
    {
        "name": "currentValue",
        "baseName": "currentValue",
        "type": "number"
    },
    {
        "name": "currentValueDecimal",
        "baseName": "currentValue_decimal",
        "type": "string"
    },
    {
        "name": "currentValueString",
        "baseName": "currentValue_string",
        "type": "string"
    },
    {
        "name": "timeValueZero",
        "baseName": "timeValueZero",
        "type": "boolean"
    },
    {
        "name": "timeValueZeroSubtractedAmount",
        "baseName": "timeValueZeroSubtractedAmount",
        "type": "number"
    },
    {
        "name": "totalNumberRedeemed",
        "baseName": "totalNumberRedeemed",
        "type": "number"
    },
    {
        "name": "totalValueRedeemed",
        "baseName": "totalValueRedeemed",
        "type": "number"
    },
    {
        "name": "totalBudgetRemaining",
        "baseName": "totalBudgetRemaining",
        "type": "number"
    },
    {
        "name": "maximumBudgetExhausted",
        "baseName": "maximumBudgetExhausted",
        "type": "boolean"
    },
    {
        "name": "maximumBudgetExhaustedBy",
        "baseName": "maximumBudgetExhaustedBy",
        "type": "number"
    },
    {
        "name": "maximumBudgetExhaustedByDecimal",
        "baseName": "maximumBudgetExhaustedBy_decimal",
        "type": "string"
    },
    {
        "name": "maximumBudgetExhaustedByString",
        "baseName": "maximumBudgetExhaustedBy_string",
        "type": "string"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemed",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed",
        "type": "number"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemedDecimal",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed_decimal",
        "type": "string"
    },
    {
        "name": "maximumBudgetExhaustedTotalValueRedeemedString",
        "baseName": "maximumBudgetExhaustedTotalValueRedeemed_string",
        "type": "string"
    },
    {
        "name": "totalAmountSubtracted",
        "baseName": "totalAmountSubtracted",
        "type": "number"
    },
    {
        "name": "totalAmountSubtractedDecimal",
        "baseName": "totalAmountSubtracted_decimal",
        "type": "string"
    },
    {
        "name": "totalAmountSubtractedString",
        "baseName": "totalAmountSubtracted_string",
        "type": "string"
    },
    {
        "name": "totalDecrementedMultiple",
        "baseName": "totalDecrementedMultiple",
        "type": "number"
    },
    {
        "name": "redeemedKeys",
        "baseName": "redeemedKeys",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTDynamicVoucherSummaryStatus"
    },
    {
        "name": "expired",
        "baseName": "expired",
        "type": "boolean"
    }
];
exports.WTDynamicVoucherSummary = WTDynamicVoucherSummary;
//# sourceMappingURL=wTDynamicVoucherSummary.js.map