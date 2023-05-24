export declare class WTStaticVoucherCampaignPreviewMessagesByPage {
    'message': string;
    'locale': string;
    'timezone': string;
    'pageNum': number;
    'pageSize': number;
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
