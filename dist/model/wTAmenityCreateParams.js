"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAmenityCreateParams = void 0;
class WTAmenityCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAmenityCreateParams.attributeTypeMap);
    }
}
exports.WTAmenityCreateParams = WTAmenityCreateParams;
WTAmenityCreateParams.discriminator = undefined;
WTAmenityCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "displayedPrice",
        "baseName": "displayedPrice",
        "type": "any"
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
        "type": "any"
    }
];
//# sourceMappingURL=wTAmenityCreateParams.js.map