export declare class WTEmployeeScheduleSimpleSMSToRecipient {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURLs'?: Array<string>;
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
