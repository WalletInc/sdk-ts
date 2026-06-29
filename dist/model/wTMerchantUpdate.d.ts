export declare class WTMerchantUpdate extends null<String, any> {
    'companyName': any | null;
    'address1': any | null;
    'address2': any | null;
    'city': any | null;
    'state': any | null;
    'country': any | null;
    'phoneNumber': any | null;
    'zip': any | null;
    'currencyAbbreviation'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
