export declare class RoleAuditLog {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'roleName': string;
    'action': string;
    'merchantID': string;
    'actionByEmployeeID': string;
    'actionByEmployeeName': string;
    'actionOnEmployeeID': string;
    'actionOnEmployeeName': string;
    'displayName': string;
    'isSystem': boolean;
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
