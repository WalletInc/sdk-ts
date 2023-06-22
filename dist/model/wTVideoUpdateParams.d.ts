export declare class WTVideoUpdateParams {
    'title': string;
    'description': string;
    'orderNumber': number;
    'mediaURL': string;
    'additionalInfoURL'?: string;
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
