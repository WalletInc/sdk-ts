export declare class WTMerchantUpdate {
    'companyName': string;
    'address1': string;
    'address2': string;
    'city': string;
    'state': string;
    'country': string;
    'phoneNumber': string;
    'zip': string;
    'currencyAbbreviation'?: string;
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
