export declare class Webpage extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'category': any | null;
    'adminPage': any | null;
    'displayName': any | null;
    'systemName': any | null;
    'isPublic': any | null;
    'orderNumber': any | null;
    'icons': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
