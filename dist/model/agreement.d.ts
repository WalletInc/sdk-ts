export declare class Agreement {
    'employeeID': string;
    'isManualRead': boolean;
    'isPricingUnderstood': boolean;
    'isTwilioTermsRead': boolean;
    'isShortCodeUnderstood': boolean;
    'isShortCodeTimelineUnderstood': boolean;
    'isShortCodeTransferUnderstood': boolean;
    'isOptInOutUnderstood': boolean;
    'isPrivacyPolicyOnWebsite': boolean;
    'isCtiaShortCodeRead': boolean;
    'isTosOnWebsite': boolean;
    'isStandardsUnderstood': boolean;
    'isStopUnderstood': boolean;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
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
