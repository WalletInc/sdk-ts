"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCartQuote = void 0;
class WTCartQuote extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCartQuote.attributeTypeMap);
    }
}
exports.WTCartQuote = WTCartQuote;
WTCartQuote.discriminator = undefined;
WTCartQuote.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "any"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    },
    {
        "name": "venue",
        "baseName": "venue",
        "type": "WTMenuVenue"
    },
    {
        "name": "lines",
        "baseName": "lines",
        "type": "any"
    },
    {
        "name": "subtotalCents",
        "baseName": "subtotalCents",
        "type": "any"
    },
    {
        "name": "taxCents",
        "baseName": "taxCents",
        "type": "any"
    },
    {
        "name": "totalCents",
        "baseName": "totalCents",
        "type": "any"
    },
    {
        "name": "ordering",
        "baseName": "ordering",
        "type": "WTWalletOrdering"
    },
    {
        "name": "ageRequirement",
        "baseName": "ageRequirement",
        "type": "WTAgeRestriction"
    },
    {
        "name": "idCheckRequired",
        "baseName": "idCheckRequired",
        "type": "any"
    },
    {
        "name": "isValid",
        "baseName": "isValid",
        "type": "any"
    }
];
//# sourceMappingURL=wTCartQuote.js.map