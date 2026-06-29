import { PresignedPostFields } from './presignedPostFields';
export declare class PresignedPost extends null<String, any> {
    'url': any | null;
    'fields': PresignedPostFields;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
