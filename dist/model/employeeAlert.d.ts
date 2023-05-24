export declare class EmployeeAlert {
    'employeeID': string;
    'title': string;
    'message': string;
    's3Bucket': string;
    's3Key': string;
    'fileSizeBytes': number;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isRead': boolean;
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
