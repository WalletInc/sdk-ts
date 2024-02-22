"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTDiningCreateParams {
    static getAttributeTypeMap() {
        return WTDiningCreateParams.attributeTypeMap;
    }
}
WTDiningCreateParams.discriminator = undefined;
WTDiningCreateParams.attributeTypeMap = [
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
exports.WTDiningCreateParams = WTDiningCreateParams;
//# sourceMappingURL=wTDiningCreateParams.js.map