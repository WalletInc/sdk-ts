export declare class WTGuestCreatePaymentIntentRequest extends null<String, any> {
    'phoneVerificationToken': any | null;
    'objectID'?: any | null;
    'lines'?: any | null;
    'ageConfirmed'?: any | null;
    'creditID'?: any | null;
    'tipCents'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
