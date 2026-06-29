export declare class Announcement extends null<String, any> {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'subject': any | null;
    'body': any | null;
    'severity': string;
    'isActive': boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
