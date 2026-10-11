import { WTMediaFileStatus } from './wTMediaFileStatus';
export declare class WTMediaFile extends null<String, any> {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    'fileURL': any | null;
    'fileType': any | null;
    'fileName': any | null;
    'fileSize': any | null;
    'folder': any | null;
    'employeeID': string;
    'status'?: WTMediaFileStatus;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
