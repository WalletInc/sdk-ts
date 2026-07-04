import { AmenityId } from './amenityId';
import { VideoProvider } from './videoProvider';
import { WTVideoPlaybackSource } from './wTVideoPlaybackSource';
export declare class Video extends null<String, any> {
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'title': any | null;
    'description': any | null;
    'orderNumber': any | null;
    'additionalInfoURL'?: any | null;
    'isActive': any | null;
    'merchantID': string;
    'provider': VideoProvider;
    'assetId': any | null;
    'source': WTVideoPlaybackSource;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
