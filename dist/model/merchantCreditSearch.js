"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MerchantCreditSearch {
    static getAttributeTypeMap() {
        return MerchantCreditSearch.attributeTypeMap;
    }
}
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
exports.MerchantCreditSearch = MerchantCreditSearch;
//# sourceMappingURL=merchantCreditSearch.js.map