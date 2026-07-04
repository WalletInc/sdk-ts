import { WTVideoUploadProvisionProvider } from './wTVideoUploadProvisionProvider';
export declare class WTVideoUploadProvision extends null<String, any> {
    'provider': WTVideoUploadProvisionProvider;
    'url': any | null;
    'fields'?: {
        [key: string]: any;
    };
    'assetId': any | null;
    'hdIncluded': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
