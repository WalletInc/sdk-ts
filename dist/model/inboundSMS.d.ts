export declare class InboundSMS {
    'id': string | null;
    'automatedReply': string;
    'automatedReplyAdditionalInfo': string;
    'smsSid': string;
    'smsMessageSid': string;
    'smsStatus': string;
    'messagingServiceSid'?: string;
    'accountSid': string;
    'messageSid': string;
    'body': string;
    'numSegments': number;
    'to': string;
    'toCity': string;
    'toState': string;
    'toZip': string;
    'toCountry': string;
    'from': string;
    'fromCity': string;
    'fromState': string;
    'fromZip': string;
    'fromCountry': string;
    'mediaURLs'?: Array<string>;
    'watsonIntent'?: string;
    'watsonIntents'?: string;
    'watsonContext'?: string;
    'watsonContexts'?: string;
    'numMedia': number;
    'apiVersion': string;
    'isOptIn'?: boolean;
    'isHelpDeskRequest'?: boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'bodyLowercase': string;
    'fromLocalized': string;
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
