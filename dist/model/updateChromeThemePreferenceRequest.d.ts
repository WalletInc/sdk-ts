import { UpdateChromeThemePreferenceRequestChromeTheme } from './updateChromeThemePreferenceRequestChromeTheme';
export declare class UpdateChromeThemePreferenceRequest {
    'chromeTheme'?: UpdateChromeThemePreferenceRequestChromeTheme;
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
