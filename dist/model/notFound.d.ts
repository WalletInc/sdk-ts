export declare class NotFound extends null<String, any> {
    'name': any | null;
    'message': any | null;
    'stack'?: any | null;
    'httpErrorCode': any | null;
    'trackingCode': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
