import { WTAgeRestriction } from './wTAgeRestriction';
import { WTMenuTaxCategory } from './wTMenuTaxCategory';
export declare class WTMenuItemCreateParams extends null<String, any> {
    'ageRestriction'?: WTAgeRestriction;
    'idCheckOnHandoff'?: any | null;
    'isSoldOut'?: any | null;
    'soldOutUntil'?: any | null;
    'fulfillmentModes'?: any | null;
    'title': any | null;
    'description'?: any | null;
    'mediaURL'?: any | null;
    'priceAmount': any | null;
    'currency'?: any | null;
    'taxCategory'?: WTMenuTaxCategory;
    'dietaryTags'?: any | null;
    'allergens'?: any | null;
    'prepMinutes'?: any | null;
    'optionGroupIDs'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
