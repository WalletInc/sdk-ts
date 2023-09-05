export declare class WTTicketUpdateParams {
    'recipientPhoneNumber'?: string;
    'recipientEmailAddress'?: string;
    'recipientMemberID'?: string;
    'isComp'?: boolean;
    'quantity'?: number;
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
