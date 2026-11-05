"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuItemCreateParams = void 0;
class WTMenuItemCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuItemCreateParams.attributeTypeMap);
    }
}
exports.WTMenuItemCreateParams = WTMenuItemCreateParams;
WTMenuItemCreateParams.discriminator = undefined;
WTMenuItemCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTMenuItemCreateParams.js.map