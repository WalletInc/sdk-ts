"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaginationRequestWithIDAndWithoutSortOptions {
    static getAttributeTypeMap() {
        return PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap;
    }
}
PaginationRequestWithIDAndWithoutSortOptions.discriminator = undefined;
PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap = [
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
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
exports.PaginationRequestWithIDAndWithoutSortOptions = PaginationRequestWithIDAndWithoutSortOptions;
//# sourceMappingURL=paginationRequestWithIDAndWithoutSortOptions.js.map