export declare class EmployeeActivityLog extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'employeeID': string;
    'action': any | null;
    'route': any | null;
    'pageName': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
