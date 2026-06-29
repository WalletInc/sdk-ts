export declare class WTTwilioVerifyAuthyCode extends null<String, any> {
    'merchantID': string;
    'phoneNumber': any | null;
    'otp': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
