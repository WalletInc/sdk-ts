"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucher = void 0;
class StaticVoucher extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StaticVoucher.attributeTypeMap);
    }
}
exports.StaticVoucher = StaticVoucher;
StaticVoucher.discriminator = undefined;
StaticVoucher.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "campaignID",
        "baseName": "campaignID",
        "type": "string"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "cellPhoneNumber",
        "baseName": "cellPhoneNumber",
        "type": "string"
    },
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "number"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID"
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
        "name": "redeemedAmount",
        "baseName": "redeemedAmount",
        "type": "number"
    },
    {
        "name": "isRedeemed",
        "baseName": "isRedeemed",
        "type": "boolean"
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
        "type": "Status"
    },
    {
        "name": "customerID",
        "baseName": "customerID",
        "type": "string"
    },
    {
        "name": "authorizedAgainstCheckNumber",
        "baseName": "authorizedAgainstCheckNumber",
        "type": "string"
    },
    {
        "name": "authorizedAmount",
        "baseName": "authorizedAmount",
        "type": "number"
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
        "name": "authorizedAmountDecimal",
        "baseName": "authorizedAmount_decimal",
        "type": "any"
    },
    {
        "name": "authorizedAmountString",
        "baseName": "authorizedAmount_string",
        "type": "any"
    },
    {
        "name": "offerAmountCentsDecimal",
        "baseName": "offerAmountCents_decimal",
        "type": "any"
    },
    {
        "name": "offerAmountCentsString",
        "baseName": "offerAmountCents_string",
        "type": "any"
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
        "name": "dateTimeRedeemed",
        "baseName": "dateTimeRedeemed",
        "type": "any"
    },
    {
        "name": "dateTimeRefunded",
        "baseName": "dateTimeRefunded",
        "type": "any"
    },
    {
        "name": "dateTimeLastViewed",
        "baseName": "dateTimeLastViewed",
        "type": "any"
    },
    {
        "name": "reasonInvalid",
        "baseName": "reasonInvalid",
        "type": "any"
    }
];
//# sourceMappingURL=staticVoucher.js.map