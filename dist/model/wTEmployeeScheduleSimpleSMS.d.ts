export declare class WTEmployeeScheduleSimpleSMS {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURL'?: string;
    'broadcastScheduledAt': Date;
    'listType': string | null;
    'listID': string;
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
