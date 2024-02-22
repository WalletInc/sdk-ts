"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaginatedWTMerchantCredits {
    static getAttributeTypeMap() {
        return PaginatedWTMerchantCredits.attributeTypeMap;
    }
}
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
exports.PaginatedWTMerchantCredits = PaginatedWTMerchantCredits;
//# sourceMappingURL=paginatedWTMerchantCredits.js.map