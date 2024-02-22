"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucherUpdateParams = void 0;
class WTDynamicVoucherUpdateParams {
    static getAttributeTypeMap() {
        return WTDynamicVoucherUpdateParams.attributeTypeMap;
    }
}
exports.WTDynamicVoucherUpdateParams = WTDynamicVoucherUpdateParams;
WTDynamicVoucherUpdateParams.discriminator = undefined;
WTDynamicVoucherUpdateParams.attributeTypeMap = [
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
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "dateTimeStart",
        "baseName": "dateTimeStart",
        "type": "Date"
    },
    {
        "name": "dateTimeExpiration",
        "baseName": "dateTimeExpiration",
        "type": "Date"
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
        "name": "decreaseAmount",
        "baseName": "decreaseAmount",
        "type": "number"
    },
    {
        "name": "frequency",
        "baseName": "frequency",
        "type": "number"
    },
    {
        "name": "frequencyType",
        "baseName": "frequencyType",
        "type": "DynamicVoucherTemporalDecreaseFrequencyType"
    },
    {
        "name": "decreaseBy",
        "baseName": "decreaseBy",
        "type": "number"
    },
    {
        "name": "decreaseEvery",
        "baseName": "decreaseEvery",
        "type": "number"
    }
];
//# sourceMappingURL=wTDynamicVoucherUpdateParams.js.map