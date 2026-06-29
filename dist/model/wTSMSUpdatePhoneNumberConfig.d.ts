export declare class WTSMSUpdatePhoneNumberConfig extends null<String, any> {
    'companyName': any | null;
    'privacyPolicyURL'?: any | null;
    'termsOfServiceURL'?: any | null;
    'messageFooter': any | null;
    'stopResponse': any | null;
    'helpResponse': any | null;
    'helpDeskKeyword': any | null;
    'helpDeskQueueResponse': any | null;
    'isConnectedToWatson'?: any | null;
    'watsonUsername'?: any | null;
    'watsonPassword'?: any | null;
    'watsonConversationWorkplaceID'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
