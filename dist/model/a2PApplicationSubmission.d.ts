import { BusinessClassification } from './businessClassification';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessStockExchanges } from './businessStockExchanges';
import { BusinessType } from './businessType';
import { JobPosition } from './jobPosition';
export declare class A2PApplicationSubmission extends null<String, any> {
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
    'businessName': any | null;
    'businessType': BusinessType;
    'businessClassification': BusinessClassification;
    'businessIndustry': BusinessIndustry;
    'taxIDType': BusinessRegistrationIdentifier;
    'taxID': any | null;
    'websiteURL': any | null;
    'socialMediaURL': any | null;
    'regionsOfOperation': any | null;
    'stockExchange'?: BusinessStockExchanges;
    'stockTicker'?: any | null;
    'messagingVolumeHigh': any | null;
    'address1': any | null;
    'address2'?: any | null;
    'city': any | null;
    'state': any | null;
    'postalCode': any | null;
    'country': any | null;
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'jobTitle': any | null;
    'jobPosition': JobPosition;
    'phoneNumber': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace A2PApplicationSubmission {
}
