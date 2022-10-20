"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaign = void 0;
class StaticVoucherCampaign {
    static getAttributeTypeMap() {
        return StaticVoucherCampaign.attributeTypeMap;
    }
}
exports.StaticVoucherCampaign = StaticVoucherCampaign;
StaticVoucherCampaign.discriminator = undefined;
StaticVoucherCampaign.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string"
    },
    {
        "name": "valueType",
        "baseName": "valueType",
        "type": "string"
    },
    {
        "name": "isLoaded",
        "baseName": "isLoaded",
        "type": "boolean"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
        "type": "string"
    },
    {
        "name": "merchantsReferenceID",
        "baseName": "merchantsReferenceID",
        "type": "string"
    },
    {
        "name": "validOnlyAtPOSRegisterIDs",
        "baseName": "validOnlyAtPOSRegisterIDs",
        "type": "Array<string>"
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
        "type": "number"
    },
    {
        "name": "numberOfVouchersInFile",
        "baseName": "numberOfVouchersInFile",
        "type": "number"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "campaignGroupID",
        "baseName": "campaignGroupID",
        "type": "string"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "string"
    },
    {
        "name": "createdBySourceID",
        "baseName": "createdBySourceID",
        "type": "number"
    },
    {
        "name": "originalFileName",
        "baseName": "originalFileName",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
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
        "name": "voucherType",
        "baseName": "voucherType",
        "type": "number"
    },
    {
        "name": "reinvestmentSumDecimal",
        "baseName": "reinvestmentSum_decimal",
        "type": "string"
    },
    {
        "name": "reinvestmentSumString",
        "baseName": "reinvestmentSum_string",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "Date"
    }
];
//# sourceMappingURL=staticVoucherCampaign.js.map