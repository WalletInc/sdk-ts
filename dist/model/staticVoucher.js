"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucher = void 0;
class StaticVoucher {
    static getAttributeTypeMap() {
        return StaticVoucher.attributeTypeMap;
    }
}
exports.StaticVoucher = StaticVoucher;
StaticVoucher.discriminator = undefined;
StaticVoucher.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
        "type": "string"
    },
    {
        "name": "authorizedAmountString",
        "baseName": "authorizedAmount_string",
        "type": "string"
    },
    {
        "name": "offerAmountCentsDecimal",
        "baseName": "offerAmountCents_decimal",
        "type": "string"
    },
    {
        "name": "offerAmountCentsString",
        "baseName": "offerAmountCents_string",
        "type": "string"
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
        "name": "dateTimeRedeemed",
        "baseName": "dateTimeRedeemed",
        "type": "Date"
    },
    {
        "name": "dateTimeRefunded",
        "baseName": "dateTimeRefunded",
        "type": "Date"
    },
    {
        "name": "dateTimeLastViewed",
        "baseName": "dateTimeLastViewed",
        "type": "Date"
    },
    {
        "name": "reasonInvalid",
        "baseName": "reasonInvalid",
        "type": "string"
    }
];
//# sourceMappingURL=staticVoucher.js.map