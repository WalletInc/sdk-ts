export declare class WTLinkBookCreateParams {
    'title': string;
    'url': string;
    'icon': string;
    'orderNumber': number;
    'linkBookSectionID'?: string | number | null;
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
