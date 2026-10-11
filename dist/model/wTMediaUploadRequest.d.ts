export declare class WTMediaUploadRequest extends null<String, any> {
    'fileName': any | null;
    'fileType': any | null;
    'fileSize': any | null;
    'folder'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
