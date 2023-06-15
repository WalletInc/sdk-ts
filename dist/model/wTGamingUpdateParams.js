"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGamingUpdateParams = void 0;
class WTGamingUpdateParams {
    static getAttributeTypeMap() {
        return WTGamingUpdateParams.attributeTypeMap;
    }
}
exports.WTGamingUpdateParams = WTGamingUpdateParams;
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
//# sourceMappingURL=wTGamingUpdateParams.js.map