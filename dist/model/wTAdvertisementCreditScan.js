"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAdvertisementCreditScan {
    static getAttributeTypeMap() {
        return WTAdvertisementCreditScan.attributeTypeMap;
    }
}
WTAdvertisementCreditScan.discriminator = undefined;
WTAdvertisementCreditScan.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
        "name": "advertisementCreditID",
        "baseName": "advertisementCreditID",
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
        "name": "dateTimeRedeemed",
        "baseName": "dateTimeRedeemed",
        "type": "Date"
    },
    {
        "name": "dateTimeRefunded",
        "baseName": "dateTimeRefunded",
        "type": "Date"
    }
];
exports.WTAdvertisementCreditScan = WTAdvertisementCreditScan;
//# sourceMappingURL=wTAdvertisementCreditScan.js.map