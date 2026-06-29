"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationRequestWithSortOptions = void 0;
class PaginationRequestWithSortOptions extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaginationRequestWithSortOptions.attributeTypeMap);
    }
}
exports.PaginationRequestWithSortOptions = PaginationRequestWithSortOptions;
PaginationRequestWithSortOptions.discriminator = undefined;
PaginationRequestWithSortOptions.attributeTypeMap = [
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
        "name": "sortKey",
        "baseName": "sortKey",
        "type": "PaginationRequestWithSortOptions.SortKeyEnum"
    },
    {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "PaginationRequestWithSortOptionsSortOrder"
    }
];
(function (PaginationRequestWithSortOptions) {
    let SortKeyEnum;
    (function (SortKeyEnum) {
        SortKeyEnum[SortKeyEnum["CreatedAt"] = 'createdAt'] = "CreatedAt";
    })(SortKeyEnum = PaginationRequestWithSortOptions.SortKeyEnum || (PaginationRequestWithSortOptions.SortKeyEnum = {}));
})(PaginationRequestWithSortOptions = exports.PaginationRequestWithSortOptions || (exports.PaginationRequestWithSortOptions = {}));
//# sourceMappingURL=paginationRequestWithSortOptions.js.map