"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPrefixes = void 0;
class PaymentPrefixes {
    static getAttributeTypeMap() {
        return PaymentPrefixes.attributeTypeMap;
    }
}
exports.PaymentPrefixes = PaymentPrefixes;
PaymentPrefixes.discriminator = undefined;
PaymentPrefixes.attributeTypeMap = [
    {
        "name": "membershipTier",
        "baseName": "MembershipTier",
        "type": "string"
    },
    {
        "name": "member",
        "baseName": "Member",
        "type": "string"
    },
    {
        "name": "merchantCredit",
        "baseName": "MerchantCredit",
        "type": "string"
    },
    {
        "name": "newsArticle",
        "baseName": "NewsArticle",
        "type": "string"
    },
    {
        "name": "performance",
        "baseName": "Performance",
        "type": "string"
    },
    {
        "name": "advertisementCredit",
        "baseName": "AdvertisementCredit",
        "type": "string"
    },
    {
        "name": "advertisementCreditScan",
        "baseName": "AdvertisementCreditScan",
        "type": "string"
    },
    {
        "name": "dynamicVoucher",
        "baseName": "DynamicVoucher",
        "type": "string"
    },
    {
        "name": "staticVoucherCampaign",
        "baseName": "StaticVoucherCampaign",
        "type": "string"
    },
    {
        "name": "staticVoucher",
        "baseName": "StaticVoucher",
        "type": "string"
    },
    {
        "name": "digitalWalletSession",
        "baseName": "DigitalWalletSession",
        "type": "string"
    },
    {
        "name": "walletConfiguration",
        "baseName": "WalletConfiguration",
        "type": "string"
    }
];
//# sourceMappingURL=paymentPrefixes.js.map