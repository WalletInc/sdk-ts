"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditHistoryPagination = void 0;
class MSMerchantCreditHistoryPagination {
    static getAttributeTypeMap() {
        return MSMerchantCreditHistoryPagination.attributeTypeMap;
    }
}
exports.MSMerchantCreditHistoryPagination = MSMerchantCreditHistoryPagination;
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
//# sourceMappingURL=mSMerchantCreditHistoryPagination.js.map