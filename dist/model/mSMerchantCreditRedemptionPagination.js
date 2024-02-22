"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MSMerchantCreditRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMerchantCreditRedemptionPagination.attributeTypeMap;
    }
}
MSMerchantCreditRedemptionPagination.discriminator = undefined;
MSMerchantCreditRedemptionPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMerchantCreditRedemption>"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
exports.MSMerchantCreditRedemptionPagination = MSMerchantCreditRedemptionPagination;
//# sourceMappingURL=mSMerchantCreditRedemptionPagination.js.map