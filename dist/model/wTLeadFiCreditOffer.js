"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLeadFiCreditOffer = void 0;
class WTLeadFiCreditOffer extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTLeadFiCreditOffer.attributeTypeMap);
    }
}
exports.WTLeadFiCreditOffer = WTLeadFiCreditOffer;
WTLeadFiCreditOffer.discriminator = undefined;
WTLeadFiCreditOffer.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "any"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "any"
    },
    {
        "name": "contingencies",
        "baseName": "contingencies",
        "type": "any"
    },
    {
        "name": "debtToIncome",
        "baseName": "debtToIncome",
        "type": "any"
    },
    {
        "name": "monthlyPayments",
        "baseName": "monthlyPayments",
        "type": "any"
    }
];
//# sourceMappingURL=wTLeadFiCreditOffer.js.map