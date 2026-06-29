import { AmenityId } from './amenityId';
export declare class MerchantURL extends null<String, any> {
    'nickname': any | null;
    'destinationURL': any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
