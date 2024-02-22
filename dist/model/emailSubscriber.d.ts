import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class EmailSubscriber {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
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
