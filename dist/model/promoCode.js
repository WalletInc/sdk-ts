"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCode = void 0;
class PromoCode {
    static getAttributeTypeMap() {
        return PromoCode.attributeTypeMap;
    }
}
exports.PromoCode = PromoCode;
PromoCode.discriminator = undefined;
PromoCode.attributeTypeMap = [
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=promoCode.js.map