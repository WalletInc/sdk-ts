"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoCreateParams = void 0;
class WTVideoCreateParams {
    static getAttributeTypeMap() {
        return WTVideoCreateParams.attributeTypeMap;
    }
}
exports.WTVideoCreateParams = WTVideoCreateParams;
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
//# sourceMappingURL=wTVideoCreateParams.js.map