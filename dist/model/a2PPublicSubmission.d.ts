import { BusinessClassificationPublic } from './businessClassificationPublic';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessStockExchanges } from './businessStockExchanges';
import { BusinessType } from './businessType';
import { JobPosition } from './jobPosition';
export declare class A2PPublicSubmission {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'businessClassification': BusinessClassificationPublic;
    'businessIndustry': BusinessIndustry;
    'taxIDType': BusinessRegistrationIdentifier;
    'taxID': any | null;
    'websiteURL': any | null;
    'socialMediaURL': any | null;
    'regionsOfOperation': any | null;
    'messagingVolumeHigh': any | null;
    'jobTitle': any | null;
    'jobPosition': JobPosition;
    'businessName': any | null;
    'businessType': BusinessType;
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
    'brandContactEmail': string;
    'stockTicker': string;
    'stockExchange': BusinessStockExchanges;
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
export declare namespace A2PPublicSubmission {
}
