"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSegmentEstimateRequest = void 0;
class WTSegmentEstimateRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSegmentEstimateRequest.attributeTypeMap);
    }
}
exports.WTSegmentEstimateRequest = WTSegmentEstimateRequest;
WTSegmentEstimateRequest.discriminator = undefined;
WTSegmentEstimateRequest.attributeTypeMap = [
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
    },
    {
        "name": "hasMedia",
        "baseName": "hasMedia",
        "type": "any"
    },
    {
        "name": "recipientCount",
        "baseName": "recipientCount",
        "type": "any"
    }
];
//# sourceMappingURL=wTSegmentEstimateRequest.js.map