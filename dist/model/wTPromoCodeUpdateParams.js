"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPromoCodeUpdateParams = void 0;
class WTPromoCodeUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPromoCodeUpdateParams.attributeTypeMap);
    }
}
exports.WTPromoCodeUpdateParams = WTPromoCodeUpdateParams;
WTPromoCodeUpdateParams.discriminator = undefined;
WTPromoCodeUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTPromoCodeUpdateParams.js.map