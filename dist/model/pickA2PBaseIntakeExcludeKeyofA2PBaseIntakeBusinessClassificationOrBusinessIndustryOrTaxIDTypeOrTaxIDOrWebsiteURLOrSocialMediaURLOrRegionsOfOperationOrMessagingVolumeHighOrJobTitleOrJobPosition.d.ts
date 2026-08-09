import { A2PBillingConsent } from './a2PBillingConsent';
import { BusinessType } from './businessType';
export declare class PickA2PBaseIntakeExcludeKeyofA2PBaseIntakeBusinessClassificationOrBusinessIndustryOrTaxIDTypeOrTaxIDOrWebsiteURLOrSocialMediaURLOrRegionsOfOperationOrMessagingVolumeHighOrJobTitleOrJobPosition {
    'firstName': string;
    'lastName': string;
    'email': string;
    'billingConsent'?: A2PBillingConsent;
    'businessName': string;
    'businessType': BusinessType;
    'address1': string;
    'address2'?: string;
    'city': string;
    'state': string;
    'postalCode': string;
    'country': string;
    'phoneNumber': string;
    'isTwilioTermsRead': boolean;
    'isWalletSmsTermsRead': boolean;
    'isPricingUnderstood': boolean;
    'isPrivacyAndTosPresent': boolean;
    'privacyPolicyUrl'?: string;
    'willObtainConsent': boolean;
    'willHonorOptOut': boolean;
    'willFollowContentRules': boolean;
    'willComplyLawAndHours': boolean;
    'infoIsAccurate': boolean;
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
export declare namespace PickA2PBaseIntakeExcludeKeyofA2PBaseIntakeBusinessClassificationOrBusinessIndustryOrTaxIDTypeOrTaxIDOrWebsiteURLOrSocialMediaURLOrRegionsOfOperationOrMessagingVolumeHighOrJobTitleOrJobPosition {
}
