"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSegmentAdvisory = void 0;
class WTSegmentAdvisory extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSegmentAdvisory.attributeTypeMap);
    }
}
exports.WTSegmentAdvisory = WTSegmentAdvisory;
WTSegmentAdvisory.discriminator = undefined;
WTSegmentAdvisory.attributeTypeMap = [
    {
        "name": "recommend",
        "baseName": "recommend",
        "type": "WTSegmentAdvisoryRecommend"
    },
    {
        "name": "perRecipientSaving",
        "baseName": "perRecipientSaving",
        "type": "any"
    },
    {
        "name": "campaignSaving",
        "baseName": "campaignSaving",
        "type": "any"
    },
    {
        "name": "costNeutral",
        "baseName": "costNeutral",
        "type": "any"
    }
];
//# sourceMappingURL=wTSegmentAdvisory.js.map