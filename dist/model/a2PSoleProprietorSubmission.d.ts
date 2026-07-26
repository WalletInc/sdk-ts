import { BusinessTypeSoleProprietorship } from './businessTypeSoleProprietorship';
export declare class A2PSoleProprietorSubmission {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
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
