"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAdvertisementCreditCreateParams = void 0;
class WTAdvertisementCreditCreateParams {
    static getAttributeTypeMap() {
        return WTAdvertisementCreditCreateParams.attributeTypeMap;
    }
}
exports.WTAdvertisementCreditCreateParams = WTAdvertisementCreditCreateParams;
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
//# sourceMappingURL=wTAdvertisementCreditCreateParams.js.map