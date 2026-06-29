"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantCredit = void 0;
class WTMerchantCredit extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMerchantCredit.attributeTypeMap);
    }
}
exports.WTMerchantCredit = WTMerchantCredit;
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
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "creditAmount",
        "baseName": "creditAmount",
        "type": "any"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
    {
        "name": "creditAmountDecimal",
        "baseName": "creditAmount_decimal",
        "type": "any"
    },
    {
        "name": "creditAmountString",
        "baseName": "creditAmount_string",
        "type": "any"
    }
];
//# sourceMappingURL=wTMerchantCredit.js.map