import { PortalPage } from './portalPage';
import { SubscriptionProduct } from './subscriptionProduct';
export declare class SubscriptionPlan {
    'id': string;
    'name': string;
    'price': number;
    'nickname': string;
    'examples': string;
    'products': Array<SubscriptionProduct>;
    'allPages': Array<PortalPage>;
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
