"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsLedgerEntry = void 0;
class WTPointsLedgerEntry extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsLedgerEntry.attributeTypeMap);
    }
}
exports.WTPointsLedgerEntry = WTPointsLedgerEntry;
WTPointsLedgerEntry.discriminator = undefined;
WTPointsLedgerEntry.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "entryType",
        "baseName": "entryType",
        "type": "WTPointsLedgerEntryType"
    },
    {
        "name": "points",
        "baseName": "points",
        "type": "any"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "sourceLabel",
        "baseName": "sourceLabel",
        "type": "any"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "employeeName",
        "baseName": "employeeName",
        "type": "any"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "any"
    },
    {
        "name": "eligibleAmountCents",
        "baseName": "eligibleAmountCents",
        "type": "any"
    },
    {
        "name": "balanceAfter",
        "baseName": "balanceAfter",
        "type": "any"
    }
];
//# sourceMappingURL=wTPointsLedgerEntry.js.map