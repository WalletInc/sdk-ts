"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaignUpdate = void 0;
class StaticVoucherCampaignUpdate {
    static getAttributeTypeMap() {
        return StaticVoucherCampaignUpdate.attributeTypeMap;
    }
}
exports.StaticVoucherCampaignUpdate = StaticVoucherCampaignUpdate;
StaticVoucherCampaignUpdate.discriminator = undefined;
StaticVoucherCampaignUpdate.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=staticVoucherCampaignUpdate.js.map