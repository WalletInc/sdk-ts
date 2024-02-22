import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class PhoneNumber {
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
    'mobileNumber': string;
    'isShortCode': boolean;
    'twilioSID': string;
    'twilioAccountSID': string;
    'id': WTWalletPageViewId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'isApproved': boolean;
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
