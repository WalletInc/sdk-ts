import { WTEmployeeS3FilePresignContext } from './wTEmployeeS3FilePresignContext';
export declare class WTEmployeeS3FilePresign {
    'fileName': string;
    'fileType': string;
    'context': WTEmployeeS3FilePresignContext;
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
