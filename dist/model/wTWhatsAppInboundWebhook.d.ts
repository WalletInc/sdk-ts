export declare class WTWhatsAppInboundWebhook extends null<String, any> {
    'smsMessageSid': string;
    'numMedia': any | null;
    'profileName': string;
    'smsSid': string;
    'waId': string;
    'smsStatus': string;
    'body': string;
    'to': string;
    'numSegments': any | null;
    'messageSid': string;
    'accountSid': string;
    'from': string;
    'apiVersion': string;
    'mediaUrls'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
