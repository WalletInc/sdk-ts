"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTierThresholdApplyResult = void 0;
class WTTierThresholdApplyResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTierThresholdApplyResult.attributeTypeMap);
    }
}
exports.WTTierThresholdApplyResult = WTTierThresholdApplyResult;
WTTierThresholdApplyResult.discriminator = undefined;
WTTierThresholdApplyResult.attributeTypeMap = [
    {
        "name": "versionID",
        "baseName": "versionID",
        "type": "string"
    },
    {
        "name": "upgraded",
        "baseName": "upgraded",
        "type": "number"
    }
];
//# sourceMappingURL=wTTierThresholdApplyResult.js.map