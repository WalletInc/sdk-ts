"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGamingCreateParams = void 0;
class WTGamingCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGamingCreateParams.attributeTypeMap);
    }
}
exports.WTGamingCreateParams = WTGamingCreateParams;
WTGamingCreateParams.discriminator = undefined;
WTGamingCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTGamingCreateParams.js.map