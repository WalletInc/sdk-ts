"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTierThresholdPreview = void 0;
class WTTierThresholdPreview extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTierThresholdPreview.attributeTypeMap);
    }
}
exports.WTTierThresholdPreview = WTTierThresholdPreview;
WTTierThresholdPreview.discriminator = undefined;
WTTierThresholdPreview.attributeTypeMap = [
    {
        "name": "direction",
        "baseName": "direction",
        "type": "WTTierThresholdDirection"
    },
    {
        "name": "wouldUpgrade",
        "baseName": "wouldUpgrade",
        "type": "any"
    },
    {
        "name": "totalMembers",
        "baseName": "totalMembers",
        "type": "any"
    }
];
//# sourceMappingURL=wTTierThresholdPreview.js.map