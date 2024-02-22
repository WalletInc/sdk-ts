import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class QRCodeDesign {
    'name': string;
    'size': number;
    'margin': number;
    'isMarginWhite': boolean;
    'cornerRadius': number;
    'colorDarkHex': string;
    'colorLightHex': string;
    'backgroundDimmingHex': string;
    'logoImageURL'?: string;
    'backgroundImageURL'?: string;
    'animatedGifBackgroundURL'?: string;
    'id': SaveTicketSettingsRequestPaymentDesignID;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
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
