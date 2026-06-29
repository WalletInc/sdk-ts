export declare class RoleAuditLog extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'roleName': any | null;
    'action': any | null;
    'merchantID': string;
    'actionByEmployeeID': string;
    'actionByEmployeeName': any | null;
    'actionOnEmployeeID': string;
    'actionOnEmployeeName': any | null;
    'displayName': any | null;
    'isSystem': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
