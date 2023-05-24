export declare class WTQRCodeDesignUpdateParams {
    'name': string;
    'size': number;
    'margin': number;
    'cornerRadius': number;
    'colorDarkHex': string;
    'colorLightHex': string;
    'backgroundDimmingHex': string;
    'logoImageURL': string;
    'backgroundImageURL': string;
    'animatedGifBackgroundURL': string;
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
