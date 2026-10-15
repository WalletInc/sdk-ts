import { AmenityId } from './amenityId';
import { VideoProvider } from './videoProvider';
import { WTVideoOrientation } from './wTVideoOrientation';
import { WTVideoPlaybackSource } from './wTVideoPlaybackSource';
import { WTVideoStatus } from './wTVideoStatus';
export declare class Video extends null<String, any> {
    'id': AmenityId;
    'createdAt': Date;
    'updatedAt': Date;
    'title': string;
    'description': string;
    'orderNumber': number;
    'additionalInfoURL'?: string;
    'isActive': boolean;
    'merchantID': string;
    'provider': VideoProvider;
    'assetId': any | null;
    'source': WTVideoPlaybackSource;
    'width'?: any | null;
    'height'?: any | null;
    'orientation'?: WTVideoOrientation;
    'durationSeconds'?: any | null;
    'posterURL'?: any | null;
    'status'?: WTVideoStatus;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
