export declare class WTSMSCreateAgreement {
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
