"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaginationRequestWithSortOptions {
    static getAttributeTypeMap() {
        return PaginationRequestWithSortOptions.attributeTypeMap;
    }
}
PaginationRequestWithSortOptions.discriminator = undefined;
PaginationRequestWithSortOptions.attributeTypeMap = [
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
exports.PaginationRequestWithSortOptions = PaginationRequestWithSortOptions;
(function (PaginationRequestWithSortOptions) {
    let SortKeyEnum;
    (function (SortKeyEnum) {
        SortKeyEnum[SortKeyEnum["CreatedAt"] = 'createdAt'] = "CreatedAt";
    })(SortKeyEnum = PaginationRequestWithSortOptions.SortKeyEnum || (PaginationRequestWithSortOptions.SortKeyEnum = {}));
})(PaginationRequestWithSortOptions = exports.PaginationRequestWithSortOptions || (exports.PaginationRequestWithSortOptions = {}));
//# sourceMappingURL=paginationRequestWithSortOptions.js.map