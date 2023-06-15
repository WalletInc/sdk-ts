"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPromoCodeCreateParams = void 0;
class WTPromoCodeCreateParams {
    static getAttributeTypeMap() {
        return WTPromoCodeCreateParams.attributeTypeMap;
    }
}
exports.WTPromoCodeCreateParams = WTPromoCodeCreateParams;
WTPromoCodeCreateParams.discriminator = undefined;
WTPromoCodeCreateParams.attributeTypeMap = [
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
        "name": "promoCode",
        "baseName": "promoCode",
        "type": "string"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
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