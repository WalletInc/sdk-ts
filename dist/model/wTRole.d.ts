export declare class WTRole extends null<String, any> {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'employees': any | null;
    'roles': any | null;
    'employeeID': string;
    'merchantID': string;
    'name': string;
    'displayName': string;
    'isPublic': boolean;
    'orderNumber': number;
    'isSystem': boolean;
    'icons': any | null;
    'category': string;
    'adminPage': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
