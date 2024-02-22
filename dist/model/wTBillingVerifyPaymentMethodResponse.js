"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTBillingVerifyPaymentMethodResponse {
    static getAttributeTypeMap() {
        return WTBillingVerifyPaymentMethodResponse.attributeTypeMap;
    }
}
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
exports.WTBillingVerifyPaymentMethodResponse = WTBillingVerifyPaymentMethodResponse;
//# sourceMappingURL=wTBillingVerifyPaymentMethodResponse.js.map