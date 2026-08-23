"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGuestOrderReceipt = void 0;
class WTGuestOrderReceipt extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGuestOrderReceipt.attributeTypeMap);
    }
}
exports.WTGuestOrderReceipt = WTGuestOrderReceipt;
WTGuestOrderReceipt.discriminator = undefined;
WTGuestOrderReceipt.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "WTOrder"
    },
    {
        "name": "amountBreakdown",
        "baseName": "amountBreakdown",
        "type": "WTGuestAmountBreakdown"
    }
];
//# sourceMappingURL=wTGuestOrderReceipt.js.map