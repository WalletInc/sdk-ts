export declare class WTWhatsAppStatusCallback extends null<String, any> {
    'smsSid': string;
    'smsStatus': string;
    'messageStatus': string;
    'to': string;
    'messageSid': string;
    'accountSid': string;
    'from': string;
    'apiVersion': string;
    'numMedia'?: any | null;
    'errorCode'?: any | null;
    'errorMessage'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
