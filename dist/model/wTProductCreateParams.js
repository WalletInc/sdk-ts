"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTProductCreateParams = void 0;
class WTProductCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTProductCreateParams.attributeTypeMap);
    }
}
exports.WTProductCreateParams = WTProductCreateParams;
WTProductCreateParams.discriminator = undefined;
WTProductCreateParams.attributeTypeMap = [
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
        "type": "number"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "any"
    },
    {
        "name": "priceAmount",
        "baseName": "priceAmount",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    },
    {
        "name": "isBuyable",
        "baseName": "isBuyable",
        "type": "boolean"
    },
    {
        "name": "taxBehavior",
        "baseName": "taxBehavior",
        "type": "ProductTaxBehavior"
    }
];
//# sourceMappingURL=wTProductCreateParams.js.map