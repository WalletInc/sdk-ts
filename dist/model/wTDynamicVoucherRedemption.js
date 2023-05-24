"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDynamicVoucherRedemption = void 0;
class WTDynamicVoucherRedemption {
    static getAttributeTypeMap() {
        return WTDynamicVoucherRedemption.attributeTypeMap;
    }
}
WTDynamicVoucherRedemption.discriminator = undefined;
WTDynamicVoucherRedemption.attributeTypeMap = [
    {
        "name": "sessionKey",
        "baseName": "sessionKey",
        "type": "string"
    },
    {
        "name": "redeemedAmount",
        "baseName": "redeemedAmount",
        "type": "number"
    },
    {
        "name": "dynamicVoucherID",
        "baseName": "dynamicVoucherID",
        "type": "string"
    },
    {
        "name": "redeemedSource",
        "baseName": "redeemedSource",
        "type": "string"
    },
    {
        "name": "redeemedTransactionID",
        "baseName": "redeemedTransactionID",
        "type": "string"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "string"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string | number"
    },
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
        "name": "redeemedAt",
        "baseName": "redeemedAt",
        "type": "Date"
    },
    {
        "name": "refundedAt",
        "baseName": "refundedAt",
        "type": "Date"
    },
    {
        "name": "refundedTransactionID",
        "baseName": "refundedTransactionID",
        "type": "string"
    },
    {
        "name": "refundedAmount",
        "baseName": "refundedAmount",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "VSDynamicVoucherStatus"
    },
    {
        "name": "redeemedAmountDecimal",
        "baseName": "redeemedAmount_decimal",
        "type": "string"
    },
    {
        "name": "redeemedAmountString",
        "baseName": "redeemedAmount_string",
        "type": "string"
    },
    {
        "name": "discountReceived",
        "baseName": "discountReceived",
        "type": "string"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "string"
    },
    {
        "name": "parentObjectID",
        "baseName": "parentObjectID",
        "type": "string"
    }
];
exports.WTDynamicVoucherRedemption = WTDynamicVoucherRedemption;
//# sourceMappingURL=wTDynamicVoucherRedemption.js.map