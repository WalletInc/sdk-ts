"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsSettings = void 0;
class WTPointsSettings extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsSettings.attributeTypeMap);
    }
}
exports.WTPointsSettings = WTPointsSettings;
WTPointsSettings.discriminator = undefined;
WTPointsSettings.attributeTypeMap = [
    {
        "name": "earningEnabled",
        "baseName": "earningEnabled",
        "type": "any"
    },
    {
        "name": "pointsPerDollar",
        "baseName": "pointsPerDollar",
        "type": "any"
    },
    {
        "name": "awardCapCents",
        "baseName": "awardCapCents",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTPointsSettings.js.map