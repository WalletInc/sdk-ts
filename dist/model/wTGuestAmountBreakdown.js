"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGuestAmountBreakdown = void 0;
class WTGuestAmountBreakdown extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGuestAmountBreakdown.attributeTypeMap);
    }
}
exports.WTGuestAmountBreakdown = WTGuestAmountBreakdown;
WTGuestAmountBreakdown.discriminator = undefined;
WTGuestAmountBreakdown.attributeTypeMap = [
    {
        "name": "listAmountCents",
        "baseName": "listAmountCents",
        "type": "any"
    },
    {
        "name": "creditAppliedCents",
        "baseName": "creditAppliedCents",
        "type": "any"
    },
    {
        "name": "amountDueCents",
        "baseName": "amountDueCents",
        "type": "any"
    }
];
//# sourceMappingURL=wTGuestAmountBreakdown.js.map