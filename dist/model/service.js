"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Service.attributeTypeMap);
    }
}
exports.Service = Service;
Service.discriminator = undefined;
Service.attributeTypeMap = [
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
        "type": "any"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "any"
    },
    {
        "name": "priceAmount",
        "baseName": "priceAmount",
        "type": "any"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    },
    {
        "name": "isBuyable",
        "baseName": "isBuyable",
        "type": "any"
    },
    {
        "name": "taxBehavior",
        "baseName": "taxBehavior",
        "type": "ProductTaxBehavior"
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
    },
    {
        "name": "stripeProductID",
        "baseName": "stripeProductID",
        "type": "any"
    },
    {
        "name": "stripePriceID",
        "baseName": "stripePriceID",
        "type": "any"
    }
];
//# sourceMappingURL=service.js.map