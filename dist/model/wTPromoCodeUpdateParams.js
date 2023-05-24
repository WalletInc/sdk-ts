"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPromoCodeUpdateParams = void 0;
class WTPromoCodeUpdateParams {
    static getAttributeTypeMap() {
        return WTPromoCodeUpdateParams.attributeTypeMap;
    }
}
WTPromoCodeUpdateParams.discriminator = undefined;
WTPromoCodeUpdateParams.attributeTypeMap = [
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
exports.WTPromoCodeUpdateParams = WTPromoCodeUpdateParams;
//# sourceMappingURL=wTPromoCodeUpdateParams.js.map