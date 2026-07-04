import { ProductTaxBehavior } from './productTaxBehavior';
export declare class WTProductCreateParams extends null<String, any> {
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
