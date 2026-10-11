import { WTMediaFile } from './wTMediaFile';
export declare class WTMediaUploadTicket extends null<String, any> {
    'mediaFile': WTMediaFile;
    'url': any | null;
    'fields': {
        [key: string]: any;
    };
    'expiresAt': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
