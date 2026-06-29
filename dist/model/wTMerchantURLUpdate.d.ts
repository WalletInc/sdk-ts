export declare class WTMerchantURLUpdate extends null<String, any> {
    'nickname': string;
    'destinationURL': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
