"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSearch = void 0;
class MemberSearch {
    static getAttributeTypeMap() {
        return MemberSearch.attributeTypeMap;
    }
}
exports.MemberSearch = MemberSearch;
MemberSearch.discriminator = undefined;
MemberSearch.attributeTypeMap = [
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
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "PaginationRequestWithSortOptionsSortOrder"
    },
    {
        "name": "sortKey",
        "baseName": "sortKey",
        "type": "MemberSearchSortKey"
    },
    {
        "name": "searchKey",
        "baseName": "searchKey",
        "type": "MemberSearchSearchKey"
    },
    {
        "name": "searchValue",
        "baseName": "searchValue",
        "type": "string"
    }
];
//# sourceMappingURL=memberSearch.js.map