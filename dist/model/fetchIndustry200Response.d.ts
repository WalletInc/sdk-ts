import { SubscriptionPlan } from './subscriptionPlan';
export declare class FetchIndustry200Response {
    'plans': Array<SubscriptionPlan>;
    'title': string;
    'icon': string;
    'sortNumber': string;
    'id': string;
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
