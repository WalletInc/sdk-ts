import { SubscriptionPlan } from './subscriptionPlan';
import { WTBillingVerifyPaymentMethodResponseBillingCadence } from './wTBillingVerifyPaymentMethodResponseBillingCadence';
export declare class WTBillingVerifyPaymentMethodResponse extends null<String, any> {
    'isPaymentMethodProvided': any | null;
    'subscription': SubscriptionPlan;
    'billingCadence': WTBillingVerifyPaymentMethodResponseBillingCadence;
    'isTrialEligible': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
