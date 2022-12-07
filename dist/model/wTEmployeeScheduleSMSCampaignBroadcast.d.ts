export declare class WTEmployeeScheduleSMSCampaignBroadcast {
    'phoneNumberID': string;
    'messageTemplate': string;
    'sendQRCode': boolean;
    'mediaURLs'?: Array<string>;
    'broadcastScheduledAt': Date;
    'locale': string;
    'timezone': string;
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
