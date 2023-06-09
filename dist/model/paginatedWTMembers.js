"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedWTMembers = void 0;
class PaginatedWTMembers {
    static getAttributeTypeMap() {
        return PaginatedWTMembers.attributeTypeMap;
    }
}
PaginatedWTMembers.discriminator = undefined;
PaginatedWTMembers.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<WTMember>"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
exports.PaginatedWTMembers = PaginatedWTMembers;
//# sourceMappingURL=paginatedWTMembers.js.map