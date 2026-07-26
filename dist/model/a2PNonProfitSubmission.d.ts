import { BusinessClassificationNonProfit } from './businessClassificationNonProfit';
import { BusinessIndustryNOTFORPROFIT } from './businessIndustryNOTFORPROFIT';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessTypeNonProfit } from './businessTypeNonProfit';
import { JobPosition } from './jobPosition';
export declare class A2PNonProfitSubmission {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'businessClassification': BusinessClassificationNonProfit;
    'businessIndustry': BusinessIndustryNOTFORPROFIT;
    'taxIDType': BusinessRegistrationIdentifier;
    'taxID': any | null;
    'websiteURL': any | null;
    'socialMediaURL': any | null;
    'regionsOfOperation': any | null;
    'messagingVolumeHigh': any | null;
    'jobTitle': any | null;
    'jobPosition': JobPosition;
    'businessName': any | null;
    'businessType': BusinessTypeNonProfit;
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
export declare namespace A2PNonProfitSubmission {
}
