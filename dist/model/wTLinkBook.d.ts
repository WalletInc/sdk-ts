import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
import { WTLinkBookLinkBookSectionID } from './wTLinkBookLinkBookSectionID';
export declare class WTLinkBook {
    'title': string;
    'url': string;
    'icon': string;
    'orderNumber': number;
    'linkBookSectionID'?: WTLinkBookLinkBookSectionID;
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
