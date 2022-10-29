"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStaticVoucherCampaignWithVoucherWithCSV = void 0;
class CreateStaticVoucherCampaignWithVoucherWithCSV {
    static getAttributeTypeMap() {
        return CreateStaticVoucherCampaignWithVoucherWithCSV.attributeTypeMap;
    }
}
exports.CreateStaticVoucherCampaignWithVoucherWithCSV = CreateStaticVoucherCampaignWithVoucherWithCSV;
CreateStaticVoucherCampaignWithVoucherWithCSV.discriminator = undefined;
CreateStaticVoucherCampaignWithVoucherWithCSV.attributeTypeMap = [
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "Date"
    },
    {
        "name": "expirationDateTime",
        "baseName": "expirationDateTime",
        "type": "Date"
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
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "string"
    },
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "sourceID",
        "baseName": "sourceID",
        "type": "number"
    },
    {
        "name": "campaignGroupID",
        "baseName": "campaignGroupID",
        "type": "string"
    }
];
//# sourceMappingURL=createStaticVoucherCampaignWithVoucherWithCSV.js.map