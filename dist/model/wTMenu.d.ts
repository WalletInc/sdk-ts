import { WTMenuVenueType } from './wTMenuVenueType';
export declare class WTMenu extends null<String, any> {
    'id': any | null;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'title': any | null;
    'description': any | null;
    'orderNumber': any | null;
    'timeZone': any | null;
    'schedule': any | null;
    'categories': any | null;
    'venueType'?: WTMenuVenueType;
    'venueID'?: any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
