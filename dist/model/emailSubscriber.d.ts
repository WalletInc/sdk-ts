import { AmenityId } from './amenityId';
export declare class EmailSubscriber extends null<String, any> {
    'firstName': any | null;
    'lastName': any | null;
    'emailAddress': any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
