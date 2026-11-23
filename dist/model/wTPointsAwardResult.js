"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsAwardResult = void 0;
class WTPointsAwardResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsAwardResult.attributeTypeMap);
    }
}
exports.WTPointsAwardResult = WTPointsAwardResult;
WTPointsAwardResult.discriminator = undefined;
WTPointsAwardResult.attributeTypeMap = [
    {
        "name": "skipped",
        "baseName": "skipped",
        "type": "WTPointsSkipReason"
    },
    {
        "name": "entryID",
        "baseName": "entryID",
        "type": "string"
    },
    {
        "name": "pointsAwarded",
        "baseName": "pointsAwarded",
        "type": "number"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "lifetimeEarned",
        "baseName": "lifetimeEarned",
        "type": "number"
    },
    {
        "name": "earned12Months",
        "baseName": "earned12Months",
        "type": "number"
    },
    {
        "name": "previousTierID",
        "baseName": "previousTierID",
        "type": "any"
    },
    {
        "name": "newTierID",
        "baseName": "newTierID",
        "type": "any"
    },
    {
        "name": "tierChanged",
        "baseName": "tierChanged",
        "type": "boolean"
    },
    {
        "name": "newTierName",
        "baseName": "newTierName",
        "type": "any"
    },
    {
        "name": "replayed",
        "baseName": "replayed",
        "type": "any"
    }
];
//# sourceMappingURL=wTPointsAwardResult.js.map