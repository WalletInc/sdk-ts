export declare class SSOptInSource extends null<String, any> {
    'id': any | null;
    'listID': string;
    'sourceName': any | null;
    'employeeID': string;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
