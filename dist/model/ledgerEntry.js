"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LedgerEntry {
    static getAttributeTypeMap() {
        return LedgerEntry.attributeTypeMap;
    }
}
LedgerEntry.discriminator = undefined;
LedgerEntry.attributeTypeMap = [
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string"
    },
    {
        "name": "registerType",
        "baseName": "registerType",
        "type": "ApplicableTerminals"
    },
    {
        "name": "transactionID",
        "baseName": "transactionID",
        "type": "string"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "LedgerEntryTransactionType"
    },
    {
        "name": "checkAmount",
        "baseName": "checkAmount",
        "type": "number"
    },
    {
        "name": "transactionAmount",
        "baseName": "transactionAmount",
        "type": "number"
    },
    {
        "name": "checkBalance",
        "baseName": "checkBalance",
        "type": "number"
    },
    {
        "name": "discountReceived",
        "baseName": "discountReceived",
        "type": "string"
    },
    {
        "name": "paymentObjectPrefix",
        "baseName": "paymentObjectPrefix",
        "type": "string"
    },
    {
        "name": "paymentObjectID",
        "baseName": "paymentObjectID",
        "type": "string"
    },
    {
        "name": "parentObjectPrefix",
        "baseName": "parentObjectPrefix",
        "type": "string"
    },
    {
        "name": "parentObjectID",
        "baseName": "parentObjectID",
        "type": "LedgerEntryParentObjectID"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
        "name": "refundedLedgerEntryID",
        "baseName": "refundedLedgerEntryID",
        "type": "string"
    },
    {
        "name": "transactionAmountDecimal",
        "baseName": "transactionAmount_decimal",
        "type": "string"
    },
    {
        "name": "transactionAmountString",
        "baseName": "transactionAmount_string",
        "type": "string"
    },
    {
        "name": "checkAmountDecimal",
        "baseName": "checkAmount_decimal",
        "type": "string"
    },
    {
        "name": "checkAmountString",
        "baseName": "checkAmount_string",
        "type": "string"
    },
    {
        "name": "checkBalanceDecimal",
        "baseName": "checkBalance_decimal",
        "type": "string"
    },
    {
        "name": "checkBalanceString",
        "baseName": "checkBalance_string",
        "type": "string"
    }
];
exports.LedgerEntry = LedgerEntry;
//# sourceMappingURL=ledgerEntry.js.map