"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAmenityUpdateParams = void 0;
class WTAmenityUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAmenityUpdateParams.attributeTypeMap);
    }
}
exports.WTAmenityUpdateParams = WTAmenityUpdateParams;
WTAmenityUpdateParams.discriminator = undefined;
WTAmenityUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTAmenityUpdateParams.js.map