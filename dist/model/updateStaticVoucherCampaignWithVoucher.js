"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateStaticVoucherCampaignWithVoucher {
    static getAttributeTypeMap() {
        return UpdateStaticVoucherCampaignWithVoucher.attributeTypeMap;
    }
}
UpdateStaticVoucherCampaignWithVoucher.discriminator = undefined;
UpdateStaticVoucherCampaignWithVoucher.attributeTypeMap = [
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
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "number"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "string"
    },
    {
        "name": "voucherID",
        "baseName": "voucherID",
        "type": "UpdateStaticVoucherCampaignWithVoucherVoucherID"
    }
];
exports.UpdateStaticVoucherCampaignWithVoucher = UpdateStaticVoucherCampaignWithVoucher;
//# sourceMappingURL=updateStaticVoucherCampaignWithVoucher.js.map