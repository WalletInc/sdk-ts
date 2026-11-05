import { WTMenuVenueType } from './wTMenuVenueType';
export declare class WTMenuVenue extends null<String, any> {
    'venueType': WTMenuVenueType;
    'venueID': any | null;
    'venueTitle': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
