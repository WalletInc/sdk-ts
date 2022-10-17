export declare class ForbiddenRequest {
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
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
