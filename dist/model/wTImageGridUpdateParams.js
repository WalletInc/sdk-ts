"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImageGridUpdateParams = void 0;
class WTImageGridUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTImageGridUpdateParams.attributeTypeMap);
    }
}
exports.WTImageGridUpdateParams = WTImageGridUpdateParams;
WTImageGridUpdateParams.discriminator = undefined;
WTImageGridUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequenceNumber",
        "type": "number"
    },
    {
        "name": "isPinned",
        "baseName": "isPinned",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTImageGridUpdateParams.js.map