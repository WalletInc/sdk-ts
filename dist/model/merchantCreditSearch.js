"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantCreditSearch = void 0;
class MerchantCreditSearch {
    static getAttributeTypeMap() {
        return MerchantCreditSearch.attributeTypeMap;
    }
}
exports.MerchantCreditSearch = MerchantCreditSearch;
MerchantCreditSearch.discriminator = undefined;
MerchantCreditSearch.attributeTypeMap = [
    {
        "name": "isArchiveIncluded",
        "baseName": "isArchiveIncluded",
        "type": "boolean"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "number"
    },
    {
        "name": "pageNum",
        "baseName": "pageNum",
        "type": "number"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    }
];
//# sourceMappingURL=merchantCreditSearch.js.map