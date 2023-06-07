"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAmenityCreateParams = void 0;
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
exports.WTAmenityCreateParams = WTAmenityCreateParams;
//# sourceMappingURL=wTAmenityCreateParams.js.map