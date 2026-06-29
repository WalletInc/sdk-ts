import { AmenityId } from './amenityId';
import { WTQuickLinkLinkBookSectionID } from './wTQuickLinkLinkBookSectionID';
export declare class LinkBook extends null<String, any> {
    'title': any | null;
    'url': string;
    'icon': any | null;
    'orderNumber': number;
    'linkBookSectionID'?: WTQuickLinkLinkBookSectionID;
    'id': AmenityId;
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
    static getAttributeTypeMap(): any;
}
