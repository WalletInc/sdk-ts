export declare class WTNewsArticleCreateParams extends null<String, any> {
    'title': string;
    'orderNumber': number;
    'body': string;
    'url': string;
    'mediaURL'?: string;
    'publishedDate'?: Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
