"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingVerifyPaymentMethodResponse = void 0;
class WTBillingVerifyPaymentMethodResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBillingVerifyPaymentMethodResponse.attributeTypeMap);
    }
}
exports.WTBillingVerifyPaymentMethodResponse = WTBillingVerifyPaymentMethodResponse;
WTBillingVerifyPaymentMethodResponse.discriminator = undefined;
WTBillingVerifyPaymentMethodResponse.attributeTypeMap = [
    {
        "name": "isPaymentMethodProvided",
        "baseName": "isPaymentMethodProvided",
        "type": "any"
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "SubscriptionPlan"
    },
    {
        "name": "billingCadence",
        "baseName": "billingCadence",
        "type": "WTBillingVerifyPaymentMethodResponseBillingCadence"
    }
];
//# sourceMappingURL=wTBillingVerifyPaymentMethodResponse.js.map