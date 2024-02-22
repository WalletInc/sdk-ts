"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateStaticVoucherCampaign {
    static getAttributeTypeMap() {
        return CreateStaticVoucherCampaign.attributeTypeMap;
    }
}
CreateStaticVoucherCampaign.discriminator = undefined;
CreateStaticVoucherCampaign.attributeTypeMap = [
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
        "type": "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType"
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
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    }
];
exports.CreateStaticVoucherCampaign = CreateStaticVoucherCampaign;
//# sourceMappingURL=createStaticVoucherCampaign.js.map