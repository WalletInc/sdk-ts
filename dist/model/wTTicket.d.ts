import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class WTTicket {
    'recipientPhoneNumber'?: string;
    'recipientEmailAddress'?: string;
    'recipientMemberID'?: string;
    'isComp'?: boolean;
    'quantity'?: number;
    'performanceID': string;
    'id': SaveTicketSettingsRequestPaymentDesignID;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
    'isClaimed'?: boolean;
    'dateTimeClaimed'?: Date;
    'claimedByPhoneNumber'?: string;
    'redeemedSource'?: string;
    'redeemedTransactionID'?: string;
    'transactionType'?: string;
    'registerID'?: string;
    'isRedeemed'?: boolean;
    'dateTimeRedeemed'?: Date;
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
