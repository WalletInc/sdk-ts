"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStaticVoucherCampaign = void 0;
class CreateStaticVoucherCampaign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CreateStaticVoucherCampaign.attributeTypeMap);
    }
}
exports.CreateStaticVoucherCampaign = CreateStaticVoucherCampaign;
CreateStaticVoucherCampaign.discriminator = undefined;
CreateStaticVoucherCampaign.attributeTypeMap = [
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "any"
    },
    {
        "name": "expirationDateTime",
        "baseName": "expirationDateTime",
        "type": "any"
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
        "name": "bucket",
        "baseName": "bucket",
        "type": "any"
    },
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "sourceID",
        "baseName": "sourceID",
        "type": "any"
    },
    {
        "name": "campaignGroupID",
        "baseName": "campaignGroupID",
        "type": "string"
    }
];
//# sourceMappingURL=createStaticVoucherCampaign.js.map