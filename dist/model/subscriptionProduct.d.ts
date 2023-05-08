import { PortalPage } from './portalPage';
import { SubscriptionFeature } from './subscriptionFeature';
export declare class SubscriptionProduct {
    'id': string;
    'title': string;
    'titleFull': string;
    'category': string;
    'features': Array<SubscriptionFeature>;
    'pages': Array<PortalPage>;
    'iconName': string;
    'description': string;
    'isHourly'?: boolean;
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
