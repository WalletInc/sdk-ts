import { WTEmployeeS3FilePresignContext } from './wTEmployeeS3FilePresignContext';
export declare class WTEmployeeS3FilePresign extends null<String, any> {
    'fileName': any | null;
    'fileType': any | null;
    'context': WTEmployeeS3FilePresignContext;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
