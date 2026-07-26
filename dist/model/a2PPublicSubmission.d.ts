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
