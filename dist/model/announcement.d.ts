export declare class Announcement {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'subject': string;
    'body': string;
    'severity': string;
    'isActive': boolean;
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
