export declare class NewsArticle {
    'title': string;
    'orderNumber': number;
    'body': string;
    'url': string;
    'mediaURL'?: string;
    'publishedDate'?: Date;
    'id': string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
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
