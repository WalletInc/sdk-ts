export declare class Response extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'routingID': any | null;
    'xmlOutput': any | null;
    'hasError': any | null;
    'destinationPropertyID': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
