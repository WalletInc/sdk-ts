"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTGamingUpdateParams {
    static getAttributeTypeMap() {
        return WTGamingUpdateParams.attributeTypeMap;
    }
}
WTGamingUpdateParams.discriminator = undefined;
WTGamingUpdateParams.attributeTypeMap = [
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
exports.WTGamingUpdateParams = WTGamingUpdateParams;
//# sourceMappingURL=wTGamingUpdateParams.js.map