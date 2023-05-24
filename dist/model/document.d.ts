export declare class Document {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    'fileURL': string;
    'fileType': string;
    'fileName': string;
    'fileSize': number;
    'folder': string;
    'employeeID': string;
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
