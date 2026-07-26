import { BusinessClassification } from './businessClassification';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegionsOfOperation } from './businessRegionsOfOperation';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessType } from './businessType';
import { JobPosition } from './jobPosition';
export declare class PickA2PApplicationSubmissionExcludeKeyofA2PApplicationSubmissionStockExchangeOrStockTickerOrBrandContactEmailOrVerificationMobile {
    'firstName': string;
    'lastName': string;
    'email': string;
    'businessClassification': BusinessClassification;
    'businessIndustry': BusinessIndustry;
    'taxIDType': BusinessRegistrationIdentifier;
    'taxID': string;
    'websiteURL': string;
    'socialMediaURL': string;
    'regionsOfOperation': Array<BusinessRegionsOfOperation>;
    'messagingVolumeHigh': boolean;
    'jobTitle': string;
    'jobPosition': JobPosition;
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
    'isPrivacyPolicyOnWebsite': boolean;
    'isTosOnWebsite': boolean;
    'isStopUnderstood': boolean;
    'isManualRead': boolean;
    'isCtiaShortCodeRead': boolean;
    'isStandardsUnderstood': boolean;
    'isShortCodeUnderstood': boolean;
    'isOptInOutUnderstood': boolean;
    'isShortCodeTransferUnderstood': boolean;
    'isPricingUnderstood': boolean;
    'isShortCodeTimelineUnderstood': boolean;
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
export declare namespace PickA2PApplicationSubmissionExcludeKeyofA2PApplicationSubmissionStockExchangeOrStockTickerOrBrandContactEmailOrVerificationMobile {
}
