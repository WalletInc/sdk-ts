"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuItem = void 0;
class WTMenuItem extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuItem.attributeTypeMap);
    }
}
exports.WTMenuItem = WTMenuItem;
WTMenuItem.discriminator = undefined;
WTMenuItem.attributeTypeMap = [
    {
        "name": "ageRestriction",
        "baseName": "ageRestriction",
        "type": "WTAgeRestriction"
    },
    {
        "name": "idCheckOnHandoff",
        "baseName": "idCheckOnHandoff",
        "type": "any"
    },
    {
        "name": "isSoldOut",
        "baseName": "isSoldOut",
        "type": "any"
    },
    {
        "name": "soldOutUntil",
        "baseName": "soldOutUntil",
        "type": "any"
    },
    {
        "name": "fulfillmentModes",
        "baseName": "fulfillmentModes",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
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
        "name": "mediaURL",
        "baseName": "mediaURL",
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
        "name": "taxCategory",
        "baseName": "taxCategory",
        "type": "WTMenuTaxCategory"
    },
    {
        "name": "dietaryTags",
        "baseName": "dietaryTags",
        "type": "any"
    },
    {
        "name": "allergens",
        "baseName": "allergens",
        "type": "any"
    },
    {
        "name": "prepMinutes",
        "baseName": "prepMinutes",
        "type": "any"
    },
    {
        "name": "optionGroupIDs",
        "baseName": "optionGroupIDs",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuItem.js.map