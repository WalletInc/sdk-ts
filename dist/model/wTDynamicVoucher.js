"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucher = void 0;
class WTDynamicVoucher extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTDynamicVoucher.attributeTypeMap);
    }
}
exports.WTDynamicVoucher = WTDynamicVoucher;
WTDynamicVoucher.discriminator = undefined;
WTDynamicVoucher.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "any"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "any"
    },
    {
        "name": "merchantsReferenceID",
        "baseName": "merchantsReferenceID",
        "type": "any"
    },
    {
        "name": "validOnlyAtPOSRegisterIDs",
        "baseName": "validOnlyAtPOSRegisterIDs",
        "type": "any"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "startingValue",
        "baseName": "startingValue",
        "type": "any"
    },
    {
        "name": "maxBudget",
        "baseName": "maxBudget",
        "type": "any"
    },
    {
        "name": "temporalDecreaseAmount",
        "baseName": "temporalDecreaseAmount",
        "type": "any"
    },
    {
        "name": "temporalDecreaseFrequency",
        "baseName": "temporalDecreaseFrequency",
        "type": "any"
    },
    {
        "name": "numericalDecreaseAmount",
        "baseName": "numericalDecreaseAmount",
        "type": "any"
    },
    {
        "name": "numericalDecreaseFrequency",
        "baseName": "numericalDecreaseFrequency",
        "type": "any"
    },
    {
        "name": "temporalDecreaseAmountDecimal",
        "baseName": "temporalDecreaseAmount_decimal",
        "type": "any"
    },
    {
        "name": "temporalDecreaseAmountString",
        "baseName": "temporalDecreaseAmount_string",
        "type": "any"
    },
    {
        "name": "numericalDecreaseAmountDecimal",
        "baseName": "numericalDecreaseAmount_decimal",
        "type": "any"
    },
    {
        "name": "numericalDecreaseAmountString",
        "baseName": "numericalDecreaseAmount_string",
        "type": "any"
    },
    {
        "name": "startingValueDecimal",
        "baseName": "startingValue_decimal",
        "type": "any"
    },
    {
        "name": "startingValueString",
        "baseName": "startingValue_string",
        "type": "any"
    },
    {
        "name": "maxBudgetDecimal",
        "baseName": "maxBudget_decimal",
        "type": "any"
    },
    {
        "name": "maxBudgetString",
        "baseName": "maxBudget_string",
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
        "name": "status",
        "baseName": "status",
        "type": "WTDynamicVoucherSummaryStatus"
    },
    {
        "name": "temporalDecreaseFrequencyType",
        "baseName": "temporalDecreaseFrequencyType",
        "type": "DynamicVoucherTemporalDecreaseFrequencyType"
    },
    {
        "name": "summary",
        "baseName": "summary",
        "type": "WTDynamicVoucherSummary"
    }
];
//# sourceMappingURL=wTDynamicVoucher.js.map