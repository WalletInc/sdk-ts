export declare class WTPerformanceUpdateParams {
    'title': string;
    'body': string;
    'startDateTime': Date;
    'price': string;
    'url': string;
    'orderNumber': number;
    'isSoldOut': boolean;
    'mediaURL'?: string;
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
