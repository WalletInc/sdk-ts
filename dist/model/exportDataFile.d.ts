export declare class ExportDataFile extends null<String, any> {
    'id': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'isRead': boolean;
    'employeeID': string;
    's3Bucket': string;
    's3Key': string;
    'fileSizeBytes': number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
