export declare class WTSMSUpdatePhoneNumberConfig {
    'companyName': string;
    'privacyPolicyURL': string;
    'termsOfServiceURL': string;
    'messageFooter': string;
    'stopResponse': string;
    'helpResponse': string;
    'helpDeskKeyword': string;
    'helpDeskQueueResponse': string;
    'isConnectedToWatson'?: boolean;
    'watsonUsername'?: string;
    'watsonPassword'?: string;
    'watsonConversationWorkplaceID'?: string;
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
