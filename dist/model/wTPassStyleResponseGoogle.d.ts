import { WTGooglePassStyle } from './wTGooglePassStyle';
export declare class WTPassStyleResponseGoogle {
    'effective': WTGooglePassStyle;
    'style': WTGooglePassStyle;
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
