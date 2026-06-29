export declare class MediaFile extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'fileURL': any | null;
    'fileType': any | null;
    'fileName': any | null;
    'fileSize': any | null;
    'folder': any | null;
    'employeeID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
