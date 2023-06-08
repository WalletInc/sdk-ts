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
        "name": "displayedPrice",
        "baseName": "displayedPrice",
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
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "string"
    }
];
exports.WTProductCreateParams = WTProductCreateParams;
//# sourceMappingURL=wTProductCreateParams.js.map