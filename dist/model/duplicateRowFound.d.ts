export declare class DuplicateRowFound extends null<String, any> {
    'name': string;
    'message': string;
    'stack'?: string;
    'httpErrorCode': number;
    'trackingCode': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
