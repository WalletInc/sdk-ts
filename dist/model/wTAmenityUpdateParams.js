"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAmenityUpdateParams = void 0;
class WTAmenityUpdateParams {
    static getAttributeTypeMap() {
        return WTAmenityUpdateParams.attributeTypeMap;
    }
}
exports.WTAmenityUpdateParams = WTAmenityUpdateParams;
WTAmenityUpdateParams.discriminator = undefined;
WTAmenityUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTAmenityUpdateParams.js.map