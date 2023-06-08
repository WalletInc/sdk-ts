export declare class WalletConfiguration {
    'headerBackgroundColor': string;
    'headerButtonColor': string;
    'leftMenuHeaderBackgroundColor': string;
    'leftMenuHeaderFontColor': string;
    'leftMenuSectionBackgroundColor': string;
    'leftMenuSectionFontColor': string;
    'companyLogoURL': string;
    'headerImageURL'?: string;
    'headerCustomIcon'?: string;
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
    'isProducts': boolean;
    'isServices': boolean;
    'isRoomRates': boolean;
    'isAmenities': boolean;
    'isGaming': boolean;
    'isDining': boolean;
    'isLounges': boolean;
    'isMapDirections': boolean;
    'isLinkBook': boolean;
    'isImageGrid': boolean;
    'isTransactionHistory': boolean;
    'isProfile': boolean;
    'isSettings': boolean;
    'isChatRoom': boolean;
    'isSmsOptIn': boolean;
    'smsOptInSourceID'?: string;
    'isEmailSubscriber': boolean;
    'googleAnalyticsID'?: string;
    'facebookPixelID'?: string;
    'publicChatRoomChannelID'?: number;
    'vanityHandle'?: string;
    'vanityPageWalletPrefix'?: string;
    'merchantCreditPaymentDesignID'?: string;
    'customDomain'?: string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
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
