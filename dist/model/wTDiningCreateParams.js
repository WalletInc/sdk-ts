"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDiningCreateParams = void 0;
class WTDiningCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTDiningCreateParams.attributeTypeMap);
    }
}
exports.WTDiningCreateParams = WTDiningCreateParams;
WTDiningCreateParams.discriminator = undefined;
WTDiningCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTDiningCreateParams.js.map