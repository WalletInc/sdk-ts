"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPublicVanityPage = void 0;
class WTPublicVanityPage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPublicVanityPage.attributeTypeMap);
    }
}
exports.WTPublicVanityPage = WTPublicVanityPage;
WTPublicVanityPage.discriminator = undefined;
WTPublicVanityPage.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "vanityPageWalletPrefix",
        "baseName": "vanityPageWalletPrefix",
        "type": "string"
    },
    {
        "name": "companyLogoURL",
        "baseName": "companyLogoURL",
        "type": "string"
    },
    {
        "name": "headerBackgroundColor",
        "baseName": "headerBackgroundColor",
        "type": "string"
    },
    {
        "name": "mobileAppIconURL",
        "baseName": "mobileAppIconURL",
        "type": "string"
    },
    {
        "name": "androidSHA256Fingerprint",
        "baseName": "androidSHA256Fingerprint",
        "type": "any"
    },
    {
        "name": "isCall",
        "baseName": "isCall",
        "type": "boolean"
    },
    {
        "name": "isPromotions",
        "baseName": "isPromotions",
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
        "name": "merchant",
        "baseName": "Merchant",
        "type": "WTPublicVanityPageMerchant"
    }
];
//# sourceMappingURL=wTPublicVanityPage.js.map