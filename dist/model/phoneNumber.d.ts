import { StaticVoucherId } from './staticVoucherId';
export declare class PhoneNumber extends null<String, any> {
    'messageFooter': any | null;
    'helpResponse': any | null;
    'stopResponse': any | null;
    'companyName': any | null;
    'privacyPolicyURL': any | null;
    'termsOfServiceURL': any | null;
    'helpDeskKeyword': any | null;
    'helpDeskQueueResponse': any | null;
    'isConnectedToWatson': any | null;
    'watsonConversationWorkplaceID': any | null;
    'watsonUsername': any | null;
    'watsonPassword': any | null;
    'mobileNumber': any | null;
    'isShortCode': any | null;
    'twilioSID': any | null;
    'twilioAccountSID': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'isApproved': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
