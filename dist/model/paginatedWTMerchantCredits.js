"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedWTMerchantCredits = void 0;
class PaginatedWTMerchantCredits extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaginatedWTMerchantCredits.attributeTypeMap);
    }
}
exports.PaginatedWTMerchantCredits = PaginatedWTMerchantCredits;
PaginatedWTMerchantCredits.discriminator = undefined;
PaginatedWTMerchantCredits.attributeTypeMap = [
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
//# sourceMappingURL=paginatedWTMerchantCredits.js.map