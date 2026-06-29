"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucherRedemption = void 0;
class WTDynamicVoucherRedemption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTDynamicVoucherRedemption.attributeTypeMap);
    }
}
exports.WTDynamicVoucherRedemption = WTDynamicVoucherRedemption;
WTDynamicVoucherRedemption.discriminator = undefined;
WTDynamicVoucherRedemption.attributeTypeMap = [
    {
        "name": "sessionKey",
        "baseName": "sessionKey",
        "type": "any"
    },
    {
        "name": "redeemedAmount",
        "baseName": "redeemedAmount",
        "type": "any"
    },
    {
        "name": "dynamicVoucherID",
        "baseName": "dynamicVoucherID",
        "type": "string"
    },
    {
        "name": "redeemedSource",
        "baseName": "redeemedSource",
        "type": "any"
    },
    {
        "name": "redeemedTransactionID",
        "baseName": "redeemedTransactionID",
        "type": "any"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "WTDynamicVoucherRedemptionTransactionType"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "MSMemberRedemptionRegisterID"
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
        "name": "redeemedAt",
        "baseName": "redeemedAt",
        "type": "any"
    },
    {
        "name": "refundedAt",
        "baseName": "refundedAt",
        "type": "any"
    },
    {
        "name": "refundedTransactionID",
        "baseName": "refundedTransactionID",
        "type": "any"
    },
    {
        "name": "refundedAmount",
        "baseName": "refundedAmount",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "VSDynamicVoucherStatus"
    },
    {
        "name": "redeemedAmountDecimal",
        "baseName": "redeemedAmount_decimal",
        "type": "any"
    },
    {
        "name": "redeemedAmountString",
        "baseName": "redeemedAmount_string",
        "type": "any"
    },
    {
        "name": "discountReceived",
        "baseName": "discountReceived",
        "type": "any"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "any"
    },
    {
        "name": "parentObjectID",
        "baseName": "parentObjectID",
        "type": "string"
    }
];
//# sourceMappingURL=wTDynamicVoucherRedemption.js.map