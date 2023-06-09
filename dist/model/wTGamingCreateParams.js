"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGamingCreateParams = void 0;
class WTGamingCreateParams {
    static getAttributeTypeMap() {
        return WTGamingCreateParams.attributeTypeMap;
    }
}
WTGamingCreateParams.discriminator = undefined;
WTGamingCreateParams.attributeTypeMap = [
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
exports.WTGamingCreateParams = WTGamingCreateParams;
//# sourceMappingURL=wTGamingCreateParams.js.map