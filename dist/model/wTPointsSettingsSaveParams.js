"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsSettingsSaveParams = void 0;
class WTPointsSettingsSaveParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsSettingsSaveParams.attributeTypeMap);
    }
}
exports.WTPointsSettingsSaveParams = WTPointsSettingsSaveParams;
WTPointsSettingsSaveParams.discriminator = undefined;
WTPointsSettingsSaveParams.attributeTypeMap = [
    {
        "name": "earningEnabled",
        "baseName": "earningEnabled",
        "type": "boolean"
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
    }
];
//# sourceMappingURL=wTPointsSettingsSaveParams.js.map