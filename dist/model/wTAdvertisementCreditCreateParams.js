"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAdvertisementCreditCreateParams {
    static getAttributeTypeMap() {
        return WTAdvertisementCreditCreateParams.attributeTypeMap;
    }
}
WTAdvertisementCreditCreateParams.discriminator = undefined;
WTAdvertisementCreditCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "valueType",
        "baseName": "valueType",
        "type": "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "maxUses",
        "baseName": "maxUses",
        "type": "number"
    },
    {
        "name": "discountValue",
        "baseName": "discountValue",
        "type": "number"
    }
];
exports.WTAdvertisementCreditCreateParams = WTAdvertisementCreditCreateParams;
//# sourceMappingURL=wTAdvertisementCreditCreateParams.js.map