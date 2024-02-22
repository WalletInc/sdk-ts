"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DynamicVoucher {
    static getAttributeTypeMap() {
        return DynamicVoucher.attributeTypeMap;
    }
}
DynamicVoucher.discriminator = undefined;
DynamicVoucher.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string"
    },
    {
        "name": "merchantsReferenceID",
        "baseName": "merchantsReferenceID",
        "type": "string"
    },
    {
        "name": "validOnlyAtPOSRegisterIDs",
        "baseName": "validOnlyAtPOSRegisterIDs",
        "type": "Array<string>"
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
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "startingValue",
        "baseName": "startingValue",
        "type": "number"
    },
    {
        "name": "maxBudget",
        "baseName": "maxBudget",
        "type": "number"
    },
    {
        "name": "temporalDecreaseAmount",
        "baseName": "temporalDecreaseAmount",
        "type": "number"
    },
    {
        "name": "temporalDecreaseFrequency",
        "baseName": "temporalDecreaseFrequency",
        "type": "number"
    },
    {
        "name": "numericalDecreaseAmount",
        "baseName": "numericalDecreaseAmount",
        "type": "number"
    },
    {
        "name": "numericalDecreaseFrequency",
        "baseName": "numericalDecreaseFrequency",
        "type": "number"
    },
    {
        "name": "temporalDecreaseAmountDecimal",
        "baseName": "temporalDecreaseAmount_decimal",
        "type": "string"
    },
    {
        "name": "temporalDecreaseAmountString",
        "baseName": "temporalDecreaseAmount_string",
        "type": "string"
    },
    {
        "name": "numericalDecreaseAmountDecimal",
        "baseName": "numericalDecreaseAmount_decimal",
        "type": "string"
    },
    {
        "name": "numericalDecreaseAmountString",
        "baseName": "numericalDecreaseAmount_string",
        "type": "string"
    },
    {
        "name": "startingValueDecimal",
        "baseName": "startingValue_decimal",
        "type": "string"
    },
    {
        "name": "startingValueString",
        "baseName": "startingValue_string",
        "type": "string"
    },
    {
        "name": "maxBudgetDecimal",
        "baseName": "maxBudget_decimal",
        "type": "string"
    },
    {
        "name": "maxBudgetString",
        "baseName": "maxBudget_string",
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
exports.DynamicVoucher = DynamicVoucher;
//# sourceMappingURL=dynamicVoucher.js.map