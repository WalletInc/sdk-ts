"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MSMerchantCreditHistoryPagination {
    static getAttributeTypeMap() {
        return MSMerchantCreditHistoryPagination.attributeTypeMap;
    }
}
MSMerchantCreditHistoryPagination.discriminator = undefined;
MSMerchantCreditHistoryPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMerchantCreditHistory>"
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
exports.MSMerchantCreditHistoryPagination = MSMerchantCreditHistoryPagination;
//# sourceMappingURL=mSMerchantCreditHistoryPagination.js.map