import { A2PBillingConsent } from './a2PBillingConsent';
import { BusinessTypeSoleProprietorship } from './businessTypeSoleProprietorship';
export declare class A2PSoleProprietorSubmission {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'billingConsent'?: A2PBillingConsent;
    'businessName': any | null;
    'businessType': BusinessTypeSoleProprietorship;
    'address1': any | null;
    'address2'?: any | null;
    'city': any | null;
    'state': any | null;
    'postalCode': any | null;
    'country': any | null;
    'phoneNumber': any | null;
    'isTwilioTermsRead': any | null;
    'isWalletSmsTermsRead': any | null;
    'isPricingUnderstood': any | null;
    'isPrivacyAndTosPresent': any | null;
    'privacyPolicyUrl'?: any | null;
    'willObtainConsent': any | null;
    'willHonorOptOut': any | null;
    'willFollowContentRules': any | null;
    'willComplyLawAndHours': any | null;
    'infoIsAccurate': any | null;
    'verificationMobile': string;
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
export declare namespace A2PSoleProprietorSubmission {
}
