export declare class MerchantURL {
    'nickname': string;
    'destinationURL': string;
    'id': string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    'isActive': boolean;
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
