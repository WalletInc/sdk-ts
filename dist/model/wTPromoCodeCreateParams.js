"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPromoCodeCreateParams = void 0;
class WTPromoCodeCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPromoCodeCreateParams.attributeTypeMap);
    }
}
exports.WTPromoCodeCreateParams = WTPromoCodeCreateParams;
WTPromoCodeCreateParams.discriminator = undefined;
WTPromoCodeCreateParams.attributeTypeMap = [
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
        "name": "promoCode",
        "baseName": "promoCode",
        "type": "any"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
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
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "Date"
    }
];
//# sourceMappingURL=wTPromoCodeCreateParams.js.map