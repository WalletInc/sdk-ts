import { VideoProvider } from './videoProvider';
export declare class WTVideoCreateParams extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'orderNumber': any | null;
    'additionalInfoURL'?: any | null;
    'provider': VideoProvider;
    'assetId': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
