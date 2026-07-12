"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGiftCardPurchaseRequest = void 0;
class WTGiftCardPurchaseRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGiftCardPurchaseRequest.attributeTypeMap);
    }
}
exports.WTGiftCardPurchaseRequest = WTGiftCardPurchaseRequest;
WTGiftCardPurchaseRequest.discriminator = undefined;
WTGiftCardPurchaseRequest.attributeTypeMap = [
    {
        "name": "valueCents",
        "baseName": "valueCents",
        "type": "any"
    },
    {
        "name": "recipientPhoneNumber",
        "baseName": "recipientPhoneNumber",
        "type": "any"
    },
    {
        "name": "recipientEmailAddress",
        "baseName": "recipientEmailAddress",
        "type": "any"
    },
    {
        "name": "recipientMemberID",
        "baseName": "recipientMemberID",
        "type": "any"
    },
    {
        "name": "pinNumber",
        "baseName": "pinNumber",
        "type": "any"
    }
];
//# sourceMappingURL=wTGiftCardPurchaseRequest.js.map