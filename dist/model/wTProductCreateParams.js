"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTProductCreateParams = void 0;
class WTProductCreateParams {
    static getAttributeTypeMap() {
        return WTProductCreateParams.attributeTypeMap;
    }
}
WTProductCreateParams.discriminator = undefined;
WTProductCreateParams.attributeTypeMap = [
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
exports.WTProductCreateParams = WTProductCreateParams;
//# sourceMappingURL=wTProductCreateParams.js.map