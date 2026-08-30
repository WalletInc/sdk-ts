"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGuestDonationRequest = void 0;
class WTGuestDonationRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGuestDonationRequest.attributeTypeMap);
    }
}
exports.WTGuestDonationRequest = WTGuestDonationRequest;
WTGuestDonationRequest.discriminator = undefined;
WTGuestDonationRequest.attributeTypeMap = [
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "any"
    },
    {
        "name": "amountCents",
        "baseName": "amountCents",
        "type": "any"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "any"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "WTGuestDonationRequestType"
    }
];
//# sourceMappingURL=wTGuestDonationRequest.js.map