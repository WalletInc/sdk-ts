"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSegmentEstimate = void 0;
class WTSegmentEstimate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSegmentEstimate.attributeTypeMap);
    }
}
exports.WTSegmentEstimate = WTSegmentEstimate;
WTSegmentEstimate.discriminator = undefined;
WTSegmentEstimate.attributeTypeMap = [
    {
        "name": "encoding",
        "baseName": "encoding",
        "type": "WTSegmentEstimateEncoding"
    },
    {
        "name": "characters",
        "baseName": "characters",
        "type": "any"
    },
    {
        "name": "textSegments",
        "baseName": "textSegments",
        "type": "any"
    },
    {
        "name": "units",
        "baseName": "units",
        "type": "any"
    },
    {
        "name": "isMms",
        "baseName": "isMms",
        "type": "any"
    },
    {
        "name": "nonGsmCharacters",
        "baseName": "nonGsmCharacters",
        "type": "any"
    },
    {
        "name": "segmentsIfCleaned",
        "baseName": "segmentsIfCleaned",
        "type": "any"
    },
    {
        "name": "advisory",
        "baseName": "advisory",
        "type": "WTSegmentAdvisory"
    }
];
//# sourceMappingURL=wTSegmentEstimate.js.map