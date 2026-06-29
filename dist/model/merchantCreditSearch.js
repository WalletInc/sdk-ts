"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantCreditSearch = void 0;
class MerchantCreditSearch extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MerchantCreditSearch.attributeTypeMap);
    }
}
exports.MerchantCreditSearch = MerchantCreditSearch;
MerchantCreditSearch.discriminator = undefined;
MerchantCreditSearch.attributeTypeMap = [
    {
        "name": "isArchiveIncluded",
        "baseName": "isArchiveIncluded",
        "type": "any"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "any"
    },
    {
        "name": "pageNum",
        "baseName": "pageNum",
        "type": "any"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "any"
    }
];
//# sourceMappingURL=merchantCreditSearch.js.map