"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCertificatePurchaseRequest = void 0;
class WTCertificatePurchaseRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCertificatePurchaseRequest.attributeTypeMap);
    }
}
exports.WTCertificatePurchaseRequest = WTCertificatePurchaseRequest;
WTCertificatePurchaseRequest.discriminator = undefined;
WTCertificatePurchaseRequest.attributeTypeMap = [
    {
        "name": "buyerMemberID",
        "baseName": "buyerMemberID",
        "type": "any"
    },
    {
        "name": "buyerPhoneNumber",
        "baseName": "buyerPhoneNumber",
        "type": "any"
    },
    {
        "name": "senderName",
        "baseName": "senderName",
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
        "name": "giftMessage",
        "baseName": "giftMessage",
        "type": "any"
    },
    {
        "name": "occasion",
        "baseName": "occasion",
        "type": "any"
    }
];
//# sourceMappingURL=wTCertificatePurchaseRequest.js.map