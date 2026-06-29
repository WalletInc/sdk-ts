"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationRequestWithIDAndWithoutSortOptions = void 0;
class PaginationRequestWithIDAndWithoutSortOptions extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap);
    }
}
exports.PaginationRequestWithIDAndWithoutSortOptions = PaginationRequestWithIDAndWithoutSortOptions;
PaginationRequestWithIDAndWithoutSortOptions.discriminator = undefined;
PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap = [
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
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
//# sourceMappingURL=paginationRequestWithIDAndWithoutSortOptions.js.map