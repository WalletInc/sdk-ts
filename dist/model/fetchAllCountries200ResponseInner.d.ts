export declare class FetchAllCountries200ResponseInner {
    'currencyAbbreviation': string;
    'phoneCode': string;
    'iso2': string;
    'name': string;
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
