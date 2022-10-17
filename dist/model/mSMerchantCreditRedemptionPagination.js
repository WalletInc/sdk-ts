"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditRedemptionPagination = void 0;
class MSMerchantCreditRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMerchantCreditRedemptionPagination.attributeTypeMap;
    }
}
exports.MSMerchantCreditRedemptionPagination = MSMerchantCreditRedemptionPagination;
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
//# sourceMappingURL=mSMerchantCreditRedemptionPagination.js.map