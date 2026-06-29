export declare class WTEmployeeScheduleSMSCampaignBroadcast extends null<String, any> {
    'phoneNumberID': string;
    'messageTemplate': any | null;
    'sendQRCode': any | null;
    'mediaURLs'?: any | null;
    'broadcastScheduledAt': any | null;
    'locale': any | null;
    'timezone': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
