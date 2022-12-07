export declare class ClickFunnelContactProfile {
    'id': number;
    'firstName': string;
    'lastName': string;
    'address': string;
    'city': string;
    'country'?: string | null;
    'state'?: string | null;
    'zip': string;
    'email': string;
    'phone': string;
    'createdAt': Date;
    'updatedAt': Date;
    'unsubscribedAt'?: any | null;
    'cfUvid': string;
    'shippingAddress'?: string;
    'shippingCountry'?: any | null;
    'shippingCity'?: any | null;
    'shippingState'?: any | null;
    'shippingZip'?: any | null;
    'vatNumber'?: any | null;
    'middleName'?: any | null;
    'websites'?: any | null;
    'locationGeneral'?: any | null;
    'normalizedLocation'?: any | null;
    'deducedLocation'?: any | null;
    'age'?: any | null;
    'gender'?: any | null;
    'ageRangeLower'?: any | null;
    'ageRangeUpper'?: any | null;
    'actionScore'?: any | null;
    'knownLtv': string;
    'tags': Array<any>;
    'timeZone'?: string | null;
    'listsNames'?: string;
    'globallyUnsubscribed': boolean;
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
