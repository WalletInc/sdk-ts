import { WTMenuVenueType } from './wTMenuVenueType';
export declare class WTMenuUpdateParams extends null<String, any> {
    'title'?: any | null;
    'description'?: any | null;
    'orderNumber'?: any | null;
    'timeZone'?: any | null;
    'schedule'?: any | null;
    'categories'?: any | null;
    'venueType'?: WTMenuVenueType;
    'venueID'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
