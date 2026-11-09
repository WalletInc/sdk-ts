"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsCreditSummary = void 0;
class WTSmsCreditSummary extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsCreditSummary.attributeTypeMap);
    }
}
exports.WTSmsCreditSummary = WTSmsCreditSummary;
WTSmsCreditSummary.discriminator = undefined;
WTSmsCreditSummary.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isOnLedger",
        "baseName": "isOnLedger",
        "type": "any"
    },
    {
        "name": "creditsGranted",
        "baseName": "creditsGranted",
        "type": "any"
    },
    {
        "name": "creditOverdraft",
        "baseName": "creditOverdraft",
        "type": "number"
    },
    {
        "name": "ledgerEpoch",
        "baseName": "ledgerEpoch",
        "type": "any"
    },
    {
        "name": "grants",
        "baseName": "grants",
        "type": "any"
    }
];
//# sourceMappingURL=wTSmsCreditSummary.js.map