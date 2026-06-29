"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGamingUpdateParams = void 0;
class WTGamingUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGamingUpdateParams.attributeTypeMap);
    }
}
exports.WTGamingUpdateParams = WTGamingUpdateParams;
WTGamingUpdateParams.discriminator = undefined;
WTGamingUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "displayedPrice",
        "baseName": "displayedPrice",
        "type": "any"
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
        "type": "any"
    }
];
//# sourceMappingURL=wTGamingUpdateParams.js.map