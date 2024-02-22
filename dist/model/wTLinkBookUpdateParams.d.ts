import { WTLinkBookLinkBookSectionID } from './wTLinkBookLinkBookSectionID';
export declare class WTLinkBookUpdateParams {
    'title': string;
    'url': string;
    'icon': string;
    'orderNumber': number;
    'linkBookSectionID'?: WTLinkBookLinkBookSectionID;
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
