import { SubscriptionPlan } from './subscriptionPlan';
export declare class WTBillingVerifyPaymentMethodResponse {
    'isPaymentMethodProvided': boolean;
    'subscription': SubscriptionPlan;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
