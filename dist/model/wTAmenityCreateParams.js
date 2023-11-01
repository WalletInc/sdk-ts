"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAmenityCreateParams = void 0;
class WTAmenityCreateParams {
    static getAttributeTypeMap() {
        return WTAmenityCreateParams.attributeTypeMap;
    }
}
exports.WTAmenityCreateParams = WTAmenityCreateParams;
WTAmenityCreateParams.discriminator = undefined;
WTAmenityCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTAmenityCreateParams.js.map