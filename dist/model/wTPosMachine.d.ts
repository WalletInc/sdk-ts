export declare class WTPosMachine extends null<String, any> {
    'registerID': any | null;
    'registerName': any | null;
    'outletName': any | null;
    'outletNumber': any | null;
    'profitCenter': any | null;
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
