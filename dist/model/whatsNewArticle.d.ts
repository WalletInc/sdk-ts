export declare class WhatsNewArticle extends null<String, any> {
    'id': string;
    'title': string;
    'story'?: string;
    'items': any | null;
    'stages': any | null;
    'publishedAt': string;
    'announcedAt': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
