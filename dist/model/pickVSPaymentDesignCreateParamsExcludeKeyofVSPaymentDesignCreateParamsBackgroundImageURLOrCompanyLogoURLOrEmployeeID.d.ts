export declare class PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID {
    'borderColor': string;
    'borderStyleType': string | null;
    'borderSize': string;
    'borderRadius': number;
    'fontColor': string;
    'fontType': string;
    'abbreviation': string;
    'acronym': string;
    'icon': string;
    'designName': string;
    'displayName': string;
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
