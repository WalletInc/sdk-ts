"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationRequestWithIDAndWithoutSortOptions = void 0;
class PaginationRequestWithIDAndWithoutSortOptions {
    static getAttributeTypeMap() {
        return PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap;
    }
}
exports.PaginationRequestWithIDAndWithoutSortOptions = PaginationRequestWithIDAndWithoutSortOptions;
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
//# sourceMappingURL=paginationRequestWithIDAndWithoutSortOptions.js.map