import { BusinessClassificationGovernment } from './businessClassificationGovernment';
import { BusinessIndustryGOVERNMENT } from './businessIndustryGOVERNMENT';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessTypeNonProfit } from './businessTypeNonProfit';
import { JobPosition } from './jobPosition';
export declare class A2PGovernmentSubmission {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'businessClassification': BusinessClassificationGovernment;
    'businessIndustry': BusinessIndustryGOVERNMENT;
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
    'isPrivacyPolicyOnWebsite': any | null;
    'isTosOnWebsite': any | null;
    'isStopUnderstood': any | null;
    'isManualRead': any | null;
    'isCtiaShortCodeRead': any | null;
    'isStandardsUnderstood': any | null;
    'isShortCodeUnderstood': any | null;
    'isOptInOutUnderstood': any | null;
    'isShortCodeTransferUnderstood': any | null;
    'isPricingUnderstood': any | null;
    'isShortCodeTimelineUnderstood': any | null;
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
export declare namespace A2PGovernmentSubmission {
}
