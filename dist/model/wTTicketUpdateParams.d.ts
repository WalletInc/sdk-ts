export declare class WTTicketUpdateParams extends null<String, any> {
    'recipientPhoneNumber'?: any | null;
    'recipientEmailAddress'?: any | null;
    'recipientMemberID'?: any | null;
    'isComp'?: any | null;
    'quantity'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
