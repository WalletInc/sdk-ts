"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTServiceUpdateParams {
    static getAttributeTypeMap() {
        return WTServiceUpdateParams.attributeTypeMap;
    }
}
WTServiceUpdateParams.discriminator = undefined;
WTServiceUpdateParams.attributeTypeMap = [
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
exports.WTServiceUpdateParams = WTServiceUpdateParams;
//# sourceMappingURL=wTServiceUpdateParams.js.map