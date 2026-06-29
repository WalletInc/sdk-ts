"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedWTMembers = void 0;
class PaginatedWTMembers extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaginatedWTMembers.attributeTypeMap);
    }
}
exports.PaginatedWTMembers = PaginatedWTMembers;
PaginatedWTMembers.discriminator = undefined;
PaginatedWTMembers.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "any"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "any"
    }
];
//# sourceMappingURL=paginatedWTMembers.js.map