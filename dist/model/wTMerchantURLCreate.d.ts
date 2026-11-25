export declare class WTMerchantURLCreate extends null<String, any> {
    'nickname': string;
    'destinationURL': string;
    'customPath'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
