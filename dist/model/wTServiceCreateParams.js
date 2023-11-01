"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTServiceCreateParams = void 0;
class WTServiceCreateParams {
    static getAttributeTypeMap() {
        return WTServiceCreateParams.attributeTypeMap;
    }
}
exports.WTServiceCreateParams = WTServiceCreateParams;
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
//# sourceMappingURL=wTServiceCreateParams.js.map