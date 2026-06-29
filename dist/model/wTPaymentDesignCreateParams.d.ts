import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
export declare class WTPaymentDesignCreateParams extends null<String, any> {
    'borderColor': string;
    'borderStyleType': PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType;
    'borderSize': string;
    'borderRadius': number;
    'fontColor': string;
    'fontType': string;
    'abbreviation': string;
    'acronym': string;
    'icon': string;
    'designName': string;
    'displayName': string;
    'backgroundImageURL'?: string;
    'companyLogoURL'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
