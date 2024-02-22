import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class SaveTicketSettingsRequest {
    'redemptionInstructions'?: string;
    'ticketExpirationDateTime': Date;
    'maxCompTickets': number;
    'paymentDesignID': SaveTicketSettingsRequestPaymentDesignID;
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
