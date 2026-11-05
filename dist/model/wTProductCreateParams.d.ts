import { ProductTaxBehavior } from './productTaxBehavior';
import { WTAgeRestriction } from './wTAgeRestriction';
export declare class WTProductCreateParams extends null<String, any> {
    'ageRestriction'?: WTAgeRestriction;
    'idCheckOnHandoff'?: boolean;
    'isSoldOut'?: boolean;
    'soldOutUntil'?: Date;
    'fulfillmentModes'?: any | null;
    'title': any | null;
    'description': any | null;
    'displayedPrice'?: any | null;
    'orderNumber': number;
    'mediaURL'?: string;
    'additionalInfoURL'?: any | null;
    'priceAmount'?: number;
    'currency'?: any | null;
    'isBuyable'?: boolean;
    'taxBehavior'?: ProductTaxBehavior;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
