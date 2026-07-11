import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
export declare class WTPaymentDesignUpdateParams extends null<String, any> {
    'borderColor': string;
    'borderStyleType': PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType;
    'borderSize': string;
    'borderRadius': number;
    'fontColor': string;
    'fontType': string;
    'icon': string;
    'designName': string;
    'displayName': string;
    'backgroundImageURL'?: string;
    'companyLogoURL'?: string;
    'abbreviation'?: string;
    'acronym'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
