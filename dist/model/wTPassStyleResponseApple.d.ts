import { WTApplePassStyle } from './wTApplePassStyle';
export declare class WTPassStyleResponseApple {
    'effective': WTApplePassStyle;
    'style': WTApplePassStyle;
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
