"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCartLineQuote = void 0;
class WTCartLineQuote extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCartLineQuote.attributeTypeMap);
    }
}
exports.WTCartLineQuote = WTCartLineQuote;
WTCartLineQuote.discriminator = undefined;
WTCartLineQuote.attributeTypeMap = [
    {
        "name": "itemID",
        "baseName": "itemID",
        "type": "any"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "any"
    },
    {
        "name": "unitAmountCents",
        "baseName": "unitAmountCents",
        "type": "any"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "any"
    },
    {
        "name": "priceChanged",
        "baseName": "priceChanged",
        "type": "any"
    },
    {
        "name": "lineTotalCents",
        "baseName": "lineTotalCents",
        "type": "any"
    },
    {
        "name": "taxCents",
        "baseName": "taxCents",
        "type": "any"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "any"
    },
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
        "name": "venue",
        "baseName": "venue",
        "type": "WTMenuVenue"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "WTCartLineProblem"
    }
];
//# sourceMappingURL=wTCartLineQuote.js.map