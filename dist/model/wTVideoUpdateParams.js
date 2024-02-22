"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTVideoUpdateParams {
    static getAttributeTypeMap() {
        return WTVideoUpdateParams.attributeTypeMap;
    }
}
WTVideoUpdateParams.discriminator = undefined;
WTVideoUpdateParams.attributeTypeMap = [
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
exports.WTVideoUpdateParams = WTVideoUpdateParams;
//# sourceMappingURL=wTVideoUpdateParams.js.map