"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedWTMerchantCredits = void 0;
class PaginatedWTMerchantCredits {
    static getAttributeTypeMap() {
        return PaginatedWTMerchantCredits.attributeTypeMap;
    }
}
exports.PaginatedWTMerchantCredits = PaginatedWTMerchantCredits;
PaginatedWTMerchantCredits.discriminator = undefined;
PaginatedWTMerchantCredits.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<WTMerchantCredit>"
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
//# sourceMappingURL=paginatedWTMerchantCredits.js.map