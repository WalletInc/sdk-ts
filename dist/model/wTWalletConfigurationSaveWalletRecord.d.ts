export declare class WTWalletConfigurationSaveWalletRecord {
    'headerBackgroundColor': string;
    'headerButtonColor': string;
    'leftMenuSectionColor': string;
    'leftMenuArrowColor': string;
    'companyLogoURL': string;
    'welcomeMessage': string;
    'isAppleEnabled': boolean;
    'isGoogleEnabled': boolean;
    'isSamsungEnabled': boolean;
    'isAdCredits': boolean;
    'isStaticVouchers': boolean;
    'isDynamicVouchers': boolean;
    'isMembershipTier': boolean;
    'isMembershipPoints': boolean;
    'isMembershipLevel': boolean;
    'isGiftCards': boolean;
    'isGiftCertificates': boolean;
    'isPromotions': boolean;
    'isMerchantCredit': boolean;
    'isTickets'?: boolean;
    'isNewsArticles': boolean;
    'isPerformances': boolean;
    'isMessages': boolean;
    'isCall': boolean;
    'isRepresentatives': boolean;
    'isMapDirections': boolean;
    'isLinkBook': boolean;
    'isImageGrid': boolean;
    'isTransactionHistory': boolean;
    'isProfile': boolean;
    'isSettings': boolean;
    'isChatRoom': boolean;
    'googleAnalyticsID'?: string;
    'publicChatRoomChannelID'?: number;
    'vanityHandle'?: string;
    'vanityPageWalletPrefix'?: string;
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
