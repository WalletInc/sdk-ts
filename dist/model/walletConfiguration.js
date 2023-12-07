"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConfiguration = void 0;
class WalletConfiguration {
    static getAttributeTypeMap() {
        return WalletConfiguration.attributeTypeMap;
    }
}
exports.WalletConfiguration = WalletConfiguration;
WalletConfiguration.discriminator = undefined;
WalletConfiguration.attributeTypeMap = [
    {
        "name": "headerBackgroundColor",
        "baseName": "headerBackgroundColor",
        "type": "string"
    },
    {
        "name": "headerButtonColor",
        "baseName": "headerButtonColor",
        "type": "string"
    },
    {
        "name": "leftMenuHeaderBackgroundColor",
        "baseName": "leftMenuHeaderBackgroundColor",
        "type": "string"
    },
    {
        "name": "leftMenuHeaderFontColor",
        "baseName": "leftMenuHeaderFontColor",
        "type": "string"
    },
    {
        "name": "leftMenuSectionBackgroundColor",
        "baseName": "leftMenuSectionBackgroundColor",
        "type": "string"
    },
    {
        "name": "leftMenuSectionFontColor",
        "baseName": "leftMenuSectionFontColor",
        "type": "string"
    },
    {
        "name": "companyLogoURL",
        "baseName": "companyLogoURL",
        "type": "string"
    },
    {
        "name": "headerImageURL",
        "baseName": "headerImageURL",
        "type": "string"
    },
    {
        "name": "headerCustomIcon",
        "baseName": "headerCustomIcon",
        "type": "string"
    },
    {
        "name": "welcomeMessage",
        "baseName": "welcomeMessage",
        "type": "string"
    },
    {
        "name": "isAppleEnabled",
        "baseName": "isAppleEnabled",
        "type": "boolean"
    },
    {
        "name": "isGoogleEnabled",
        "baseName": "isGoogleEnabled",
        "type": "boolean"
    },
    {
        "name": "isSamsungEnabled",
        "baseName": "isSamsungEnabled",
        "type": "boolean"
    },
    {
        "name": "isAdCredits",
        "baseName": "isAdCredits",
        "type": "boolean"
    },
    {
        "name": "isStaticVouchers",
        "baseName": "isStaticVouchers",
        "type": "boolean"
    },
    {
        "name": "isDynamicVouchers",
        "baseName": "isDynamicVouchers",
        "type": "boolean"
    },
    {
        "name": "isMembershipTier",
        "baseName": "isMembershipTier",
        "type": "boolean"
    },
    {
        "name": "isMembershipPoints",
        "baseName": "isMembershipPoints",
        "type": "boolean"
    },
    {
        "name": "isMembershipLevel",
        "baseName": "isMembershipLevel",
        "type": "boolean"
    },
    {
        "name": "isGiftCards",
        "baseName": "isGiftCards",
        "type": "boolean"
    },
    {
        "name": "isGiftCertificates",
        "baseName": "isGiftCertificates",
        "type": "boolean"
    },
    {
        "name": "isPromotions",
        "baseName": "isPromotions",
        "type": "boolean"
    },
    {
        "name": "isMerchantCredit",
        "baseName": "isMerchantCredit",
        "type": "boolean"
    },
    {
        "name": "isTickets",
        "baseName": "isTickets",
        "type": "boolean"
    },
    {
        "name": "isNewsArticles",
        "baseName": "isNewsArticles",
        "type": "boolean"
    },
    {
        "name": "isPerformances",
        "baseName": "isPerformances",
        "type": "boolean"
    },
    {
        "name": "isMessages",
        "baseName": "isMessages",
        "type": "boolean"
    },
    {
        "name": "isCall",
        "baseName": "isCall",
        "type": "boolean"
    },
    {
        "name": "isRepresentatives",
        "baseName": "isRepresentatives",
        "type": "boolean"
    },
    {
        "name": "isProducts",
        "baseName": "isProducts",
        "type": "boolean"
    },
    {
        "name": "isServices",
        "baseName": "isServices",
        "type": "boolean"
    },
    {
        "name": "isRoomRates",
        "baseName": "isRoomRates",
        "type": "boolean"
    },
    {
        "name": "isAmenities",
        "baseName": "isAmenities",
        "type": "boolean"
    },
    {
        "name": "isGaming",
        "baseName": "isGaming",
        "type": "boolean"
    },
    {
        "name": "isDining",
        "baseName": "isDining",
        "type": "boolean"
    },
    {
        "name": "isLounges",
        "baseName": "isLounges",
        "type": "boolean"
    },
    {
        "name": "isMapDirections",
        "baseName": "isMapDirections",
        "type": "boolean"
    },
    {
        "name": "isLinkBook",
        "baseName": "isLinkBook",
        "type": "boolean"
    },
    {
        "name": "isImageGrid",
        "baseName": "isImageGrid",
        "type": "boolean"
    },
    {
        "name": "isVideos",
        "baseName": "isVideos",
        "type": "boolean"
    },
    {
        "name": "isTransactionHistory",
        "baseName": "isTransactionHistory",
        "type": "boolean"
    },
    {
        "name": "isProfile",
        "baseName": "isProfile",
        "type": "boolean"
    },
    {
        "name": "isSettings",
        "baseName": "isSettings",
        "type": "boolean"
    },
    {
        "name": "isChatRoom",
        "baseName": "isChatRoom",
        "type": "boolean"
    },
    {
        "name": "isSmsOptIn",
        "baseName": "isSmsOptIn",
        "type": "boolean"
    },
    {
        "name": "smsOptInSourceID",
        "baseName": "smsOptInSourceID",
        "type": "string"
    },
    {
        "name": "isEmailSubscriber",
        "baseName": "isEmailSubscriber",
        "type": "boolean"
    },
    {
        "name": "googleAnalyticsID",
        "baseName": "googleAnalyticsID",
        "type": "string"
    },
    {
        "name": "facebookPixelID",
        "baseName": "facebookPixelID",
        "type": "string"
    },
    {
        "name": "publicChatRoomChannelID",
        "baseName": "publicChatRoomChannelID",
        "type": "number"
    },
    {
        "name": "vanityHandle",
        "baseName": "vanityHandle",
        "type": "string"
    },
    {
        "name": "vanityPageWalletPrefix",
        "baseName": "vanityPageWalletPrefix",
        "type": "string"
    },
    {
        "name": "merchantCreditPaymentDesignID",
        "baseName": "merchantCreditPaymentDesignID",
        "type": "string"
    },
    {
        "name": "customDomain",
        "baseName": "customDomain",
        "type": "string"
    },
    {
        "name": "isClaimed",
        "baseName": "isClaimed",
        "type": "boolean"
    },
    {
        "name": "mobileAppIconURL",
        "baseName": "mobileAppIconURL",
        "type": "string"
    },
    {
        "name": "isAgeGate",
        "baseName": "isAgeGate",
        "type": "boolean"
    },
    {
        "name": "ageGateMinimum",
        "baseName": "ageGateMinimum",
        "type": "number"
    },
    {
        "name": "socialInstagramURL",
        "baseName": "socialInstagramURL",
        "type": "string"
    },
    {
        "name": "socialFacebookURL",
        "baseName": "socialFacebookURL",
        "type": "string"
    },
    {
        "name": "socialYouTubeURL",
        "baseName": "socialYouTubeURL",
        "type": "string"
    },
    {
        "name": "socialTwitterURL",
        "baseName": "socialTwitterURL",
        "type": "string"
    },
    {
        "name": "socialLinkedInURL",
        "baseName": "socialLinkedInURL",
        "type": "string"
    },
    {
        "name": "primaryPhoneNumber",
        "baseName": "primaryPhoneNumber",
        "type": "string"
    },
    {
        "name": "primaryEmailAddress",
        "baseName": "primaryEmailAddress",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=walletConfiguration.js.map