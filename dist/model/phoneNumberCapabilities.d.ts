export declare class PhoneNumberCapabilities {
    'fax': boolean;
    'voice': boolean;
    'sms': boolean;
    'mms': boolean;
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
