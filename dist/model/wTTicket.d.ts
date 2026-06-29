import { AmenityId } from './amenityId';
export declare class WTTicket extends null<String, any> {
    'recipientPhoneNumber'?: string;
    'recipientEmailAddress'?: string;
    'recipientMemberID'?: string;
    'isComp'?: boolean;
    'quantity'?: any | null;
    'performanceID': string;
    'id': AmenityId;
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
    static getAttributeTypeMap(): any;
}
