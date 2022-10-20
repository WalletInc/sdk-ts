"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImageGridCreateParams = void 0;
class WTImageGridCreateParams {
    static getAttributeTypeMap() {
        return WTImageGridCreateParams.attributeTypeMap;
    }
}
exports.WTImageGridCreateParams = WTImageGridCreateParams;
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
    }
];
//# sourceMappingURL=wTImageGridCreateParams.js.map