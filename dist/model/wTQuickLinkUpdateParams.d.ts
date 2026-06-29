import { WTQuickLinkLinkBookSectionID } from './wTQuickLinkLinkBookSectionID';
export declare class WTQuickLinkUpdateParams extends null<String, any> {
    'title': any | null;
    'url': string;
    'icon': any | null;
    'orderNumber': number;
    'linkBookSectionID'?: WTQuickLinkLinkBookSectionID;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
