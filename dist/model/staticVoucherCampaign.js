"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaign = void 0;
class StaticVoucherCampaign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StaticVoucherCampaign.attributeTypeMap);
    }
}
exports.StaticVoucherCampaign = StaticVoucherCampaign;
StaticVoucherCampaign.discriminator = undefined;
StaticVoucherCampaign.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "any"
    },
    {
        "name": "valueType",
        "baseName": "valueType",
        "type": "StaticVoucherCampaignValueType"
    },
    {
        "name": "isLoaded",
        "baseName": "isLoaded",
        "type": "any"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
        "type": "any"
    },
    {
        "name": "merchantsReferenceID",
        "baseName": "merchantsReferenceID",
        "type": "any"
    },
    {
        "name": "validOnlyAtPOSRegisterIDs",
        "baseName": "validOnlyAtPOSRegisterIDs",
        "type": "any"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "reinvestmentSum",
        "baseName": "reinvestmentSum",
        "type": "any"
    },
    {
        "name": "numberOfVouchersInFile",
        "baseName": "numberOfVouchersInFile",
        "type": "any"
    },
    {
        "name": "campaignGroupID",
        "baseName": "campaignGroupID",
        "type": "string"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "any"
    },
    {
        "name": "createdBySourceID",
        "baseName": "createdBySourceID",
        "type": "any"
    },
    {
        "name": "originalFileName",
        "baseName": "originalFileName",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
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
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "voucherType",
        "baseName": "voucherType",
        "type": "any"
    },
    {
        "name": "reinvestmentSumDecimal",
        "baseName": "reinvestmentSum_decimal",
        "type": "any"
    },
    {
        "name": "reinvestmentSumString",
        "baseName": "reinvestmentSum_string",
        "type": "any"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "any"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "any"
    }
];
//# sourceMappingURL=staticVoucherCampaign.js.map