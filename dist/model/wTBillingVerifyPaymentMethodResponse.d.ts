import { SubscriptionPlan } from './subscriptionPlan';
export declare class WTBillingVerifyPaymentMethodResponse extends null<String, any> {
    'isPaymentMethodProvided': any | null;
    'subscription': SubscriptionPlan;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
