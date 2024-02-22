import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class Dining {
    'title': string;
    'description': string;
    'displayedPrice'?: string;
    'orderNumber': number;
    'mediaURL'?: string;
    'additionalInfoURL'?: string;
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
