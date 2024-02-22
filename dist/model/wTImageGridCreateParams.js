"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTImageGridCreateParams {
    static getAttributeTypeMap() {
        return WTImageGridCreateParams.attributeTypeMap;
    }
}
WTImageGridCreateParams.discriminator = undefined;
WTImageGridCreateParams.attributeTypeMap = [
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
    },
    {
        "name": "isPinned",
        "baseName": "isPinned",
        "type": "boolean"
    }
];
exports.WTImageGridCreateParams = WTImageGridCreateParams;
//# sourceMappingURL=wTImageGridCreateParams.js.map