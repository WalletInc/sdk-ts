"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucherCreateParams = void 0;
class WTDynamicVoucherCreateParams {
    static getAttributeTypeMap() {
        return WTDynamicVoucherCreateParams.attributeTypeMap;
    }
}
WTDynamicVoucherCreateParams.discriminator = undefined;
WTDynamicVoucherCreateParams.attributeTypeMap = [
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
        "type": "string"
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
exports.WTDynamicVoucherCreateParams = WTDynamicVoucherCreateParams;
//# sourceMappingURL=wTDynamicVoucherCreateParams.js.map