import { WTEmployee } from './wTEmployee';
export declare class WTRole {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'employees': Array<WTEmployee>;
    'roles': Array<WTRole>;
    'employeeID': string;
    'merchantID': string;
    'name': string;
    'displayName': string;
    'isPublic': boolean;
    'orderNumber': number;
    'isSystem': boolean;
    'icons': Array<string>;
    'category': string;
    'adminPage': string;
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
