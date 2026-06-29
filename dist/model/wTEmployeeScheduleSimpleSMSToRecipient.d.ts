export declare class WTEmployeeScheduleSimpleSMSToRecipient extends null<String, any> {
    'phoneNumberID': string;
    'messageTemplate': any | null;
    'mediaURLs'?: any | null;
    'broadcastScheduledAt': any | null;
    'toCellPhone': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
