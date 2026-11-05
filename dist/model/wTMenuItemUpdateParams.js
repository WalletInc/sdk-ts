"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuItemUpdateParams = void 0;
class WTMenuItemUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuItemUpdateParams.attributeTypeMap);
    }
}
exports.WTMenuItemUpdateParams = WTMenuItemUpdateParams;
WTMenuItemUpdateParams.discriminator = undefined;
WTMenuItemUpdateParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTMenuItemUpdateParams.js.map