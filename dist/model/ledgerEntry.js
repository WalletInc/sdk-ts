"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntry = void 0;
class LedgerEntry extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LedgerEntry.attributeTypeMap);
    }
}
exports.LedgerEntry = LedgerEntry;
LedgerEntry.discriminator = undefined;
LedgerEntry.attributeTypeMap = [
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "any"
    },
    {
        "name": "registerType",
        "baseName": "registerType",
        "type": "ApplicableTerminals"
    },
    {
        "name": "transactionID",
        "baseName": "transactionID",
        "type": "any"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "LedgerEntryTransactionType"
    },
    {
        "name": "checkAmount",
        "baseName": "checkAmount",
        "type": "any"
    },
    {
        "name": "transactionAmount",
        "baseName": "transactionAmount",
        "type": "any"
    },
    {
        "name": "checkBalance",
        "baseName": "checkBalance",
        "type": "any"
    },
    {
        "name": "discountReceived",
        "baseName": "discountReceived",
        "type": "any"
    },
    {
        "name": "paymentObjectPrefix",
        "baseName": "paymentObjectPrefix",
        "type": "any"
    },
    {
        "name": "paymentObjectID",
        "baseName": "paymentObjectID",
        "type": "string"
    },
    {
        "name": "parentObjectPrefix",
        "baseName": "parentObjectPrefix",
        "type": "any"
    },
    {
        "name": "parentObjectID",
        "baseName": "parentObjectID",
        "type": "LedgerEntryParentObjectID"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "any"
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
        "name": "refundedLedgerEntryID",
        "baseName": "refundedLedgerEntryID",
        "type": "string"
    },
    {
        "name": "transactionAmountDecimal",
        "baseName": "transactionAmount_decimal",
        "type": "any"
    },
    {
        "name": "transactionAmountString",
        "baseName": "transactionAmount_string",
        "type": "any"
    },
    {
        "name": "checkAmountDecimal",
        "baseName": "checkAmount_decimal",
        "type": "any"
    },
    {
        "name": "checkAmountString",
        "baseName": "checkAmount_string",
        "type": "any"
    },
    {
        "name": "checkBalanceDecimal",
        "baseName": "checkBalance_decimal",
        "type": "any"
    },
    {
        "name": "checkBalanceString",
        "baseName": "checkBalance_string",
        "type": "any"
    }
];
//# sourceMappingURL=ledgerEntry.js.map