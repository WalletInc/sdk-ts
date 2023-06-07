"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTServiceCreateParams = void 0;
class WTServiceCreateParams {
    static getAttributeTypeMap() {
        return WTServiceCreateParams.attributeTypeMap;
    }
}
WTServiceCreateParams.discriminator = undefined;
WTServiceCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    }
];
exports.WTServiceCreateParams = WTServiceCreateParams;
//# sourceMappingURL=wTServiceCreateParams.js.map