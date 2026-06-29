"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaticVoucherCampaignWithVoucher = void 0;
class UpdateStaticVoucherCampaignWithVoucher extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateStaticVoucherCampaignWithVoucher.attributeTypeMap);
    }
}
exports.UpdateStaticVoucherCampaignWithVoucher = UpdateStaticVoucherCampaignWithVoucher;
UpdateStaticVoucherCampaignWithVoucher.discriminator = undefined;
UpdateStaticVoucherCampaignWithVoucher.attributeTypeMap = [
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
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "any"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "any"
    },
    {
        "name": "voucherID",
        "baseName": "voucherID",
        "type": "string"
    }
];
//# sourceMappingURL=updateStaticVoucherCampaignWithVoucher.js.map