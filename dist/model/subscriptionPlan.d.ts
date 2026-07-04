import { SubscriptionPlanAnnual } from './subscriptionPlanAnnual';
export declare class SubscriptionPlan extends null<String, any> {
    'id': any | null;
    'name': any | null;
    'price': any | null;
    'nickname': any | null;
    'examples': any | null;
    'products': any | null;
    'allPages': any | null;
    'annual'?: SubscriptionPlanAnnual;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
