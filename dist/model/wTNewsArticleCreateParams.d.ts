export declare class WTNewsArticleCreateParams {
    'title': string;
    'orderNumber': number;
    'body': string;
    'url': string;
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
