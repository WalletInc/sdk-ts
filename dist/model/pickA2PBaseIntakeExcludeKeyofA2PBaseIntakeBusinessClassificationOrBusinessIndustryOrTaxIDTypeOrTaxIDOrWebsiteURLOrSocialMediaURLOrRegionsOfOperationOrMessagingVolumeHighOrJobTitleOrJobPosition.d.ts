import { BusinessType } from './businessType';
export declare class PickA2PBaseIntakeExcludeKeyofA2PBaseIntakeBusinessClassificationOrBusinessIndustryOrTaxIDTypeOrTaxIDOrWebsiteURLOrSocialMediaURLOrRegionsOfOperationOrMessagingVolumeHighOrJobTitleOrJobPosition {
    'firstName': string;
    'lastName': string;
    'email': string;
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
export declare namespace PickA2PBaseIntakeExcludeKeyofA2PBaseIntakeBusinessClassificationOrBusinessIndustryOrTaxIDTypeOrTaxIDOrWebsiteURLOrSocialMediaURLOrRegionsOfOperationOrMessagingVolumeHighOrJobTitleOrJobPosition {
}
