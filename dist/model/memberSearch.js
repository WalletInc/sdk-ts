"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemberSearch {
    static getAttributeTypeMap() {
        return MemberSearch.attributeTypeMap;
    }
}
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
exports.MemberSearch = MemberSearch;
//# sourceMappingURL=memberSearch.js.map