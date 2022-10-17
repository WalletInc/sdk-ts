export declare class WTEmployeeScheduleSimpleSMSToRecipient {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURL'?: string;
    'broadcastScheduledAt': Date;
    'toCellPhone': string;
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
