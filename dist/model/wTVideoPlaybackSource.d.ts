import { WTVideoPlaybackSourceType } from './wTVideoPlaybackSourceType';
export declare class WTVideoPlaybackSource extends null<String, any> {
    'type': WTVideoPlaybackSourceType;
    'url': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
