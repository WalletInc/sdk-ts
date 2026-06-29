"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImageGridCreateParams = void 0;
class WTImageGridCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTImageGridCreateParams.attributeTypeMap);
    }
}
exports.WTImageGridCreateParams = WTImageGridCreateParams;
WTImageGridCreateParams.discriminator = undefined;
WTImageGridCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTImageGridCreateParams.js.map