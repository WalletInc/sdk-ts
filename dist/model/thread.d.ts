import { AmenityId } from './amenityId';
export declare class Thread extends null<String, any> {
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    'threadID': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
