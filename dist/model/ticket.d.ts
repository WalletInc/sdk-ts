export declare class Ticket {
    'recipientPhoneNumber': string;
    'recipientEmailAddress'?: string;
    'recipientMemberID'?: string;
    'isComp'?: boolean;
    'performanceID': string;
    'id': string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
    'isClaimed'?: boolean;
    'isRedeemed'?: boolean;
    'dateTimeClaimed'?: Date;
    'dateTimeRedeemed'?: Date;
    'claimedByPhoneNumber'?: string;
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
