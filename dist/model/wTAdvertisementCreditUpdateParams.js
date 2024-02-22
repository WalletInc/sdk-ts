"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAdvertisementCreditUpdateParams {
    static getAttributeTypeMap() {
        return WTAdvertisementCreditUpdateParams.attributeTypeMap;
    }
}
WTAdvertisementCreditUpdateParams.discriminator = undefined;
WTAdvertisementCreditUpdateParams.attributeTypeMap = [
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
exports.WTAdvertisementCreditUpdateParams = WTAdvertisementCreditUpdateParams;
//# sourceMappingURL=wTAdvertisementCreditUpdateParams.js.map