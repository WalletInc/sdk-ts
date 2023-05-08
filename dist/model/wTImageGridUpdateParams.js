"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImageGridUpdateParams = void 0;
class WTImageGridUpdateParams {
    static getAttributeTypeMap() {
        return WTImageGridUpdateParams.attributeTypeMap;
    }
}
WTImageGridUpdateParams.discriminator = undefined;
WTImageGridUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequenceNumber",
        "type": "number"
    }
];
exports.WTImageGridUpdateParams = WTImageGridUpdateParams;
//# sourceMappingURL=wTImageGridUpdateParams.js.map