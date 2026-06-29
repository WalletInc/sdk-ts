"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAdvertisementCreditUpdateParams = void 0;
class WTAdvertisementCreditUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAdvertisementCreditUpdateParams.attributeTypeMap);
    }
}
exports.WTAdvertisementCreditUpdateParams = WTAdvertisementCreditUpdateParams;
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
        "type": "any"
    }
];
//# sourceMappingURL=wTAdvertisementCreditUpdateParams.js.map