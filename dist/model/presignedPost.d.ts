import { PresignedPostFields } from './presignedPostFields';
export declare class PresignedPost {
    'url': string;
    'fields': PresignedPostFields;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
