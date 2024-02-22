export declare class WTNewsArticleUpdateParams {
    'title': string;
    'body': string;
    'url': string;
    'orderNumber': number;
    'mediaURL'?: string;
    'publishedDate'?: Date;
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
