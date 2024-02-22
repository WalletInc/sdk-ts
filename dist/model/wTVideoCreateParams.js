"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTVideoCreateParams {
    static getAttributeTypeMap() {
        return WTVideoCreateParams.attributeTypeMap;
    }
}
WTVideoCreateParams.discriminator = undefined;
WTVideoCreateParams.attributeTypeMap = [
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
exports.WTVideoCreateParams = WTVideoCreateParams;
//# sourceMappingURL=wTVideoCreateParams.js.map