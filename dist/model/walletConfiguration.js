"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConfiguration = void 0;
class WalletConfiguration extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WalletConfiguration.attributeTypeMap);
    }
}
exports.WalletConfiguration = WalletConfiguration;
WalletConfiguration.discriminator = undefined;
WalletConfiguration.attributeTypeMap = [
    {
        "name": "headerBackgroundColor",
        "baseName": "headerBackgroundColor",
        "type": "any"
    },
    {
        "name": "headerButtonColor",
        "baseName": "headerButtonColor",
        "type": "any"
    },
    {
        "name": "leftMenuHeaderBackgroundColor",
        "baseName": "leftMenuHeaderBackgroundColor",
        "type": "any"
    },
    {
        "name": "leftMenuHeaderFontColor",
        "baseName": "leftMenuHeaderFontColor",
        "type": "any"
    },
    {
        "name": "leftMenuSectionBackgroundColor",
        "baseName": "leftMenuSectionBackgroundColor",
        "type": "any"
    },
    {
        "name": "leftMenuSectionFontColor",
        "baseName": "leftMenuSectionFontColor",
        "type": "any"
    },
    {
        "name": "companyLogoURL",
        "baseName": "companyLogoURL",
        "type": "any"
    },
    {
        "name": "headerImageURL",
        "baseName": "headerImageURL",
        "type": "any"
    },
    {
        "name": "headerCustomIcon",
        "baseName": "headerCustomIcon",
        "type": "any"
    },
    {
        "name": "welcomeMessage",
        "baseName": "welcomeMessage",
        "type": "any"
    },
    {
        "name": "isAppleEnabled",
        "baseName": "isAppleEnabled",
        "type": "any"
    },
    {
        "name": "isGoogleEnabled",
        "baseName": "isGoogleEnabled",
        "type": "any"
    },
    {
        "name": "isSamsungEnabled",
        "baseName": "isSamsungEnabled",
        "type": "any"
    },
    {
        "name": "isAdCredits",
        "baseName": "isAdCredits",
        "type": "any"
    },
    {
        "name": "isStaticVouchers",
        "baseName": "isStaticVouchers",
        "type": "any"
    },
    {
        "name": "isDynamicVouchers",
        "baseName": "isDynamicVouchers",
        "type": "any"
    },
    {
        "name": "isMembershipTier",
        "baseName": "isMembershipTier",
        "type": "any"
    },
    {
        "name": "isMembershipPoints",
        "baseName": "isMembershipPoints",
        "type": "any"
    },
    {
        "name": "isMembershipLevel",
        "baseName": "isMembershipLevel",
        "type": "any"
    },
    {
        "name": "isGiftCards",
        "baseName": "isGiftCards",
        "type": "any"
    },
    {
        "name": "isGiftCertificates",
        "baseName": "isGiftCertificates",
        "type": "any"
    },
    {
        "name": "isPromotions",
        "baseName": "isPromotions",
        "type": "any"
    },
    {
        "name": "isMerchantCredit",
        "baseName": "isMerchantCredit",
        "type": "any"
    },
    {
        "name": "isTickets",
        "baseName": "isTickets",
        "type": "any"
    },
    {
        "name": "isNewsArticles",
        "baseName": "isNewsArticles",
        "type": "any"
    },
    {
        "name": "isPerformances",
        "baseName": "isPerformances",
        "type": "any"
    },
    {
        "name": "isMessages",
        "baseName": "isMessages",
        "type": "any"
    },
    {
        "name": "isCall",
        "baseName": "isCall",
        "type": "any"
    },
    {
        "name": "isRepresentatives",
        "baseName": "isRepresentatives",
        "type": "any"
    },
    {
        "name": "isProducts",
        "baseName": "isProducts",
        "type": "any"
    },
    {
        "name": "isServices",
        "baseName": "isServices",
        "type": "any"
    },
    {
        "name": "isRoomRates",
        "baseName": "isRoomRates",
        "type": "any"
    },
    {
        "name": "isAmenities",
        "baseName": "isAmenities",
        "type": "any"
    },
    {
        "name": "isGaming",
        "baseName": "isGaming",
        "type": "any"
    },
    {
        "name": "isDining",
        "baseName": "isDining",
        "type": "any"
    },
    {
        "name": "isLounges",
        "baseName": "isLounges",
        "type": "any"
    },
    {
        "name": "isMapDirections",
        "baseName": "isMapDirections",
        "type": "any"
    },
    {
        "name": "isLinkBook",
        "baseName": "isLinkBook",
        "type": "any"
    },
    {
        "name": "isImageGrid",
        "baseName": "isImageGrid",
        "type": "any"
    },
    {
        "name": "isVideos",
        "baseName": "isVideos",
        "type": "any"
    },
    {
        "name": "isTransactionHistory",
        "baseName": "isTransactionHistory",
        "type": "any"
    },
    {
        "name": "isProfile",
        "baseName": "isProfile",
        "type": "any"
    },
    {
        "name": "isSettings",
        "baseName": "isSettings",
        "type": "any"
    },
    {
        "name": "isChatRoom",
        "baseName": "isChatRoom",
        "type": "any"
    },
    {
        "name": "isSmsOptIn",
        "baseName": "isSmsOptIn",
        "type": "any"
    },
    {
        "name": "smsOptInSourceID",
        "baseName": "smsOptInSourceID",
        "type": "WTWalletConfigurationSaveWalletRecordSmsOptInSourceID"
    },
    {
        "name": "isEmailSubscriber",
        "baseName": "isEmailSubscriber",
        "type": "any"
    },
    {
        "name": "googleAnalyticsID",
        "baseName": "googleAnalyticsID",
        "type": "any"
    },
    {
        "name": "facebookPixelID",
        "baseName": "facebookPixelID",
        "type": "any"
    },
    {
        "name": "publicChatRoomChannelID",
        "baseName": "publicChatRoomChannelID",
        "type": "any"
    },
    {
        "name": "vanityHandle",
        "baseName": "vanityHandle",
        "type": "any"
    },
    {
        "name": "vanityPageWalletPrefix",
        "baseName": "vanityPageWalletPrefix",
        "type": "any"
    },
    {
        "name": "merchantCreditPaymentDesignID",
        "baseName": "merchantCreditPaymentDesignID",
        "type": "any"
    },
    {
        "name": "customDomain",
        "baseName": "customDomain",
        "type": "any"
    },
    {
        "name": "isClaimed",
        "baseName": "isClaimed",
        "type": "any"
    },
    {
        "name": "mobileAppIconURL",
        "baseName": "mobileAppIconURL",
        "type": "any"
    },
    {
        "name": "isAgeGate",
        "baseName": "isAgeGate",
        "type": "any"
    },
    {
        "name": "ageGateMinimum",
        "baseName": "ageGateMinimum",
        "type": "any"
    },
    {
        "name": "ageGateDeclineURL",
        "baseName": "ageGateDeclineURL",
        "type": "any"
    },
    {
        "name": "socialInstagramURL",
        "baseName": "socialInstagramURL",
        "type": "any"
    },
    {
        "name": "socialFacebookURL",
        "baseName": "socialFacebookURL",
        "type": "any"
    },
    {
        "name": "socialYouTubeURL",
        "baseName": "socialYouTubeURL",
        "type": "any"
    },
    {
        "name": "socialTwitterURL",
        "baseName": "socialTwitterURL",
        "type": "any"
    },
    {
        "name": "socialLinkedInURL",
        "baseName": "socialLinkedInURL",
        "type": "any"
    },
    {
        "name": "socialBackgroundColor",
        "baseName": "socialBackgroundColor",
        "type": "any"
    },
    {
        "name": "socialFontColor",
        "baseName": "socialFontColor",
        "type": "any"
    },
    {
        "name": "primaryPhoneNumber",
        "baseName": "primaryPhoneNumber",
        "type": "any"
    },
    {
        "name": "primaryWhatsApp",
        "baseName": "primaryWhatsApp",
        "type": "any"
    },
    {
        "name": "primaryEmailAddress",
        "baseName": "primaryEmailAddress",
        "type": "any"
    },
    {
        "name": "customJS",
        "baseName": "customJS",
        "type": "any"
    },
    {
        "name": "customCSS",
        "baseName": "customCSS",
        "type": "any"
    },
    {
        "name": "nonMobileRedirectURL",
        "baseName": "nonMobileRedirectURL",
        "type": "any"
    },
    {
        "name": "appleAppStoreURL",
        "baseName": "appleAppStoreURL",
        "type": "any"
    },
    {
        "name": "googlePlayStoreURL",
        "baseName": "googlePlayStoreURL",
        "type": "any"
    },
    {
        "name": "passBrandKit",
        "baseName": "passBrandKit",
        "type": "WTWalletConfigurationSaveWalletRecordPassBrandKit"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "androidSHA256Fingerprint",
        "baseName": "androidSHA256Fingerprint",
        "type": "any"
    }
];
//# sourceMappingURL=walletConfiguration.js.map