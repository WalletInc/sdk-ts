export declare class Alert {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'title': string;
    'message': string;
    'isRead': boolean;
    's3Bucket': string;
    's3Key': string;
    'fileSizeBytes': number;
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
