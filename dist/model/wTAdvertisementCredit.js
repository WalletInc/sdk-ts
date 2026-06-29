"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAdvertisementCredit = void 0;
class WTAdvertisementCredit extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAdvertisementCredit.attributeTypeMap);
    }
}
exports.WTAdvertisementCredit = WTAdvertisementCredit;
WTAdvertisementCredit.discriminator = undefined;
WTAdvertisementCredit.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "valueType",
        "baseName": "valueType",
        "type": "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "maxUses",
        "baseName": "maxUses",
        "type": "number"
    },
    {
        "name": "discountValue",
        "baseName": "discountValue",
        "type": "number"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
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
        "name": "discountValueDecimal",
        "baseName": "discountValue_decimal",
        "type": "any"
    },
    {
        "name": "discountValueString",
        "baseName": "discountValue_string",
        "type": "any"
    }
];
//# sourceMappingURL=wTAdvertisementCredit.js.map