"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditHistoryPagination = void 0;
class MSMerchantCreditHistoryPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMerchantCreditHistoryPagination.attributeTypeMap);
    }
}
exports.MSMerchantCreditHistoryPagination = MSMerchantCreditHistoryPagination;
MSMerchantCreditHistoryPagination.discriminator = undefined;
MSMerchantCreditHistoryPagination.attributeTypeMap = [
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
//# sourceMappingURL=mSMerchantCreditHistoryPagination.js.map