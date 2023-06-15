"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = void 0;
class Merchant {
    static getAttributeTypeMap() {
        return Merchant.attributeTypeMap;
    }
}
exports.Merchant = Merchant;
Merchant.discriminator = undefined;
Merchant.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "string"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "string"
    },
    {
        "name": "currencyAbbreviation",
        "baseName": "currencyAbbreviation",
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
        "name": "industry",
        "baseName": "industry",
        "type": "string"
    },
    {
        "name": "industryName",
        "baseName": "industryName",
        "type": "string"
    },
    {
        "name": "infoGenesisPropertyID",
        "baseName": "infoGenesisPropertyID",
        "type": "string"
    },
    {
        "name": "isFrozen",
        "baseName": "isFrozen",
        "type": "boolean"
    },
    {
        "name": "billingContactEmployeeID",
        "baseName": "billingContactEmployeeID",
        "type": "string"
    },
    {
        "name": "marketingContactEmployeeID",
        "baseName": "marketingContactEmployeeID",
        "type": "string"
    },
    {
        "name": "technicalContactEmployeeID",
        "baseName": "technicalContactEmployeeID",
        "type": "string"
    },
    {
        "name": "customerServiceContactEmployeeID",
        "baseName": "customerServiceContactEmployeeID",
        "type": "string"
    },
    {
        "name": "stripeCustomerID",
        "baseName": "stripeCustomerID",
        "type": "string"
    },
    {
        "name": "isPaymentMethodProvided",
        "baseName": "isPaymentMethodProvided",
        "type": "boolean"
    },
    {
        "name": "planNickname",
        "baseName": "planNickname",
        "type": "string"
    },
    {
        "name": "maxSMSCount",
        "baseName": "maxSMSCount",
        "type": "number"
    },
    {
        "name": "isSmsAgreement",
        "baseName": "isSmsAgreement",
        "type": "boolean"
    },
    {
        "name": "isWhiteLabeled",
        "baseName": "isWhiteLabeled",
        "type": "boolean"
    }
];
//# sourceMappingURL=merchant.js.map