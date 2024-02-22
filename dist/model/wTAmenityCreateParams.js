"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAmenityCreateParams {
    static getAttributeTypeMap() {
        return WTAmenityCreateParams.attributeTypeMap;
    }
}
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
exports.WTAmenityCreateParams = WTAmenityCreateParams;
//# sourceMappingURL=wTAmenityCreateParams.js.map