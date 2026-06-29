"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaignUpdate = void 0;
class StaticVoucherCampaignUpdate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StaticVoucherCampaignUpdate.attributeTypeMap);
    }
}
exports.StaticVoucherCampaignUpdate = StaticVoucherCampaignUpdate;
StaticVoucherCampaignUpdate.discriminator = undefined;
StaticVoucherCampaignUpdate.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=staticVoucherCampaignUpdate.js.map