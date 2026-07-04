import { AmenityId } from './amenityId';
import { ProductTaxBehavior } from './productTaxBehavior';
export declare class Service extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'displayedPrice'?: any | null;
    'orderNumber': any | null;
    'mediaURL'?: any | null;
    'additionalInfoURL'?: any | null;
    'priceAmount'?: any | null;
    'currency'?: any | null;
    'isBuyable'?: any | null;
    'taxBehavior'?: ProductTaxBehavior;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    'stripeProductID'?: any | null;
    'stripePriceID'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
