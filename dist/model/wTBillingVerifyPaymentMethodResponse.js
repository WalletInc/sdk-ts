"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingVerifyPaymentMethodResponse = void 0;
class WTBillingVerifyPaymentMethodResponse {
    static getAttributeTypeMap() {
        return WTBillingVerifyPaymentMethodResponse.attributeTypeMap;
    }
}
exports.WTBillingVerifyPaymentMethodResponse = WTBillingVerifyPaymentMethodResponse;
WTBillingVerifyPaymentMethodResponse.discriminator = undefined;
WTBillingVerifyPaymentMethodResponse.attributeTypeMap = [
    {
        "name": "isPaymentMethodProvided",
        "baseName": "isPaymentMethodProvided",
        "type": "boolean"
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "SubscriptionPlan"
    }
];
//# sourceMappingURL=wTBillingVerifyPaymentMethodResponse.js.map