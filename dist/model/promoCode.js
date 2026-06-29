"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCode = void 0;
class PromoCode extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PromoCode.attributeTypeMap);
    }
}
exports.PromoCode = PromoCode;
PromoCode.discriminator = undefined;
PromoCode.attributeTypeMap = [
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
        "type": "any"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "any"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=promoCode.js.map