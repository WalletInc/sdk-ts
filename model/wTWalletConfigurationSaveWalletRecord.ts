/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTWalletConfigurationSaveWalletRecord {
    'headerBackgroundColor': string;
    'headerButtonColor': string;
    'leftMenuSectionColor': string;
    'leftMenuArrowColor': string;
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "leftMenuSectionColor",
            "baseName": "leftMenuSectionColor",
            "type": "string"
        },
        {
            "name": "leftMenuArrowColor",
            "baseName": "leftMenuArrowColor",
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
        }    ];

    static getAttributeTypeMap() {
        return WTWalletConfigurationSaveWalletRecord.attributeTypeMap;
    }
}

