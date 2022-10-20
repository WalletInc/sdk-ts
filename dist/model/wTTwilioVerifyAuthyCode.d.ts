export declare class WTTwilioVerifyAuthyCode {
    'merchantID': string;
    'phoneNumber': string;
    'otp': string;
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
