"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditRedemptionPagination = void 0;
class MSMerchantCreditRedemptionPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMerchantCreditRedemptionPagination.attributeTypeMap);
    }
}
exports.MSMerchantCreditRedemptionPagination = MSMerchantCreditRedemptionPagination;
MSMerchantCreditRedemptionPagination.discriminator = undefined;
MSMerchantCreditRedemptionPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "any"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "any"
    }
];
//# sourceMappingURL=mSMerchantCreditRedemptionPagination.js.map