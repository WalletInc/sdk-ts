export declare class Webpage {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'category': string;
    'adminPage': string;
    'displayName': string;
    'systemName': string;
    'isPublic': boolean;
    'orderNumber': number;
    'icons': Array<string>;
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
