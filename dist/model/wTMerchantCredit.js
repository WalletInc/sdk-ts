"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantCredit = void 0;
class WTMerchantCredit {
    static getAttributeTypeMap() {
        return WTMerchantCredit.attributeTypeMap;
    }
}
WTMerchantCredit.discriminator = undefined;
WTMerchantCredit.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    },
    {
        "name": "creditAmount",
        "baseName": "creditAmount",
        "type": "number"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "creditAmountDecimal",
        "baseName": "creditAmount_decimal",
        "type": "string"
    },
    {
        "name": "creditAmountString",
        "baseName": "creditAmount_string",
        "type": "string"
    }
];
exports.WTMerchantCredit = WTMerchantCredit;
//# sourceMappingURL=wTMerchantCredit.js.map