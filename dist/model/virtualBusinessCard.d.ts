import { AmenityId } from './amenityId';
export declare class VirtualBusinessCard extends null<String, any> {
    'firstName': any | null;
    'lastName': any | null;
    'emailAddress': any | null;
    'designation': any | null;
    'phoneNumber': any | null;
    'introduction'?: any | null;
    'instagram'?: any | null;
    'facebook'?: any | null;
    'youTube'?: any | null;
    'twitter'?: any | null;
    'linkedIn'?: any | null;
    'whatsApp'?: any | null;
    'avatarURL'?: any | null;
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
