"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUpdateParams = void 0;
class WTVideoUpdateParams {
    static getAttributeTypeMap() {
        return WTVideoUpdateParams.attributeTypeMap;
    }
}
exports.WTVideoUpdateParams = WTVideoUpdateParams;
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
//# sourceMappingURL=wTVideoUpdateParams.js.map