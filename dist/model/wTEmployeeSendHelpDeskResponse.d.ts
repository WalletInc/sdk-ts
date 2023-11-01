export declare class WTEmployeeSendHelpDeskResponse {
    'helpDeskRequestID': string;
    'message': string;
    'mediaURLs'?: Array<string>;
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
