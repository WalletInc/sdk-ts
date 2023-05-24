export declare class EmployeeActivityLog {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'employeeID': string;
    'action': string;
    'route': string;
    'pageName': string;
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
