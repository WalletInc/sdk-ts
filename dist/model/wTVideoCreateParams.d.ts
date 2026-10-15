import { VideoProvider } from './videoProvider';
export declare class WTVideoCreateParams extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'orderNumber': number;
    'additionalInfoURL'?: any | null;
    'assetId': any | null;
    'provider': VideoProvider;
    'width'?: any | null;
    'height'?: any | null;
    'durationSeconds'?: any | null;
    'posterURL'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
