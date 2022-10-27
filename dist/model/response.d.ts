export declare class Response {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'routingID': string;
    'xmlOutput': string;
    'hasError': boolean;
    'destinationPropertyID': string;
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
