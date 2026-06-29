import { AmenityId } from './amenityId';
export declare class ImageGrid extends null<String, any> {
    'title': any | null;
    'url': any | null;
    'mediaURL': any | null;
    'sequenceNumber': any | null;
    'isPinned'?: any | null;
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
