import { AmenityId } from './amenityId';
export declare class RoomRate extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'displayedPrice'?: any | null;
    'orderNumber': any | null;
    'mediaURL'?: any | null;
    'additionalInfoURL'?: any | null;
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
