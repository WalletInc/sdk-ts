export declare class PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId {
    'messageFooter': string;
    'helpResponse': string;
    'stopResponse': string;
    'companyName': string;
    'privacyPolicyURL': string;
    'termsOfServiceURL': string;
    'helpDeskKeyword': string;
    'helpDeskQueueResponse': string;
    'isConnectedToWatson': boolean;
    'watsonConversationWorkplaceID': string;
    'watsonUsername': string;
    'watsonPassword': string;
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
