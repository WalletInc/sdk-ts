export declare class WTTwilioVerifyAuthyCodeResponse extends null<String, any> {
    'success': boolean;
    'message'?: string;
    'token': string;
    'chatUserID'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
