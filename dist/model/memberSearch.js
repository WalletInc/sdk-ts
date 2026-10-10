"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSearch = void 0;
class MemberSearch extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MemberSearch.attributeTypeMap);
    }
}
exports.MemberSearch = MemberSearch;
MemberSearch.discriminator = undefined;
MemberSearch.attributeTypeMap = [
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
        "type": "any"
    }
];
//# sourceMappingURL=memberSearch.js.map