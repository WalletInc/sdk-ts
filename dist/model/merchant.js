"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = void 0;
class Merchant extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Merchant.attributeTypeMap);
    }
}
exports.Merchant = Merchant;
Merchant.discriminator = undefined;
Merchant.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "any"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "any"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "any"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "any"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "any"
    },
    {
        "name": "currencyAbbreviation",
        "baseName": "currencyAbbreviation",
        "type": "any"
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
        "name": "industry",
        "baseName": "industry",
        "type": "any"
    },
    {
        "name": "industryName",
        "baseName": "industryName",
        "type": "any"
    },
    {
        "name": "infoGenesisPropertyID",
        "baseName": "infoGenesisPropertyID",
        "type": "any"
    },
    {
        "name": "isFrozen",
        "baseName": "isFrozen",
        "type": "any"
    },
    {
        "name": "billingContactEmployeeID",
        "baseName": "billingContactEmployeeID",
        "type": "any"
    },
    {
        "name": "marketingContactEmployeeID",
        "baseName": "marketingContactEmployeeID",
        "type": "any"
    },
    {
        "name": "technicalContactEmployeeID",
        "baseName": "technicalContactEmployeeID",
        "type": "any"
    },
    {
        "name": "customerServiceContactEmployeeID",
        "baseName": "customerServiceContactEmployeeID",
        "type": "any"
    },
    {
        "name": "stripeCustomerID",
        "baseName": "stripeCustomerID",
        "type": "any"
    },
    {
        "name": "stripeConnectAccountID",
        "baseName": "stripeConnectAccountID",
        "type": "any"
    },
    {
        "name": "isPaymentMethodProvided",
        "baseName": "isPaymentMethodProvided",
        "type": "any"
    },
    {
        "name": "planNickname",
        "baseName": "planNickname",
        "type": "any"
    },
    {
        "name": "maxSMSCount",
        "baseName": "maxSMSCount",
        "type": "any"
    },
    {
        "name": "isSmsAgreement",
        "baseName": "isSmsAgreement",
        "type": "any"
    },
    {
        "name": "isWhiteLabeled",
        "baseName": "isWhiteLabeled",
        "type": "any"
    },
    {
        "name": "isFeatured",
        "baseName": "isFeatured",
        "type": "any"
    }
];
//# sourceMappingURL=merchant.js.map