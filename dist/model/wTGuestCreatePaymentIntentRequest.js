"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGuestCreatePaymentIntentRequest = void 0;
class WTGuestCreatePaymentIntentRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGuestCreatePaymentIntentRequest.attributeTypeMap);
    }
}
exports.WTGuestCreatePaymentIntentRequest = WTGuestCreatePaymentIntentRequest;
WTGuestCreatePaymentIntentRequest.discriminator = undefined;
WTGuestCreatePaymentIntentRequest.attributeTypeMap = [
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "any"
    },
    {
        "name": "objectID",
        "baseName": "objectID",
        "type": "any"
    },
    {
        "name": "lines",
        "baseName": "lines",
        "type": "any"
    },
    {
        "name": "ageConfirmed",
        "baseName": "ageConfirmed",
        "type": "any"
    },
    {
        "name": "creditID",
        "baseName": "creditID",
        "type": "any"
    },
    {
        "name": "tipCents",
        "baseName": "tipCents",
        "type": "any"
    }
];
//# sourceMappingURL=wTGuestCreatePaymentIntentRequest.js.map