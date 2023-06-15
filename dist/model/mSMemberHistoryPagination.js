"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberHistoryPagination = void 0;
class MSMemberHistoryPagination {
    static getAttributeTypeMap() {
        return MSMemberHistoryPagination.attributeTypeMap;
    }
}
exports.MSMemberHistoryPagination = MSMemberHistoryPagination;
MSMemberHistoryPagination.discriminator = undefined;
MSMemberHistoryPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMemberHistory>"
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
//# sourceMappingURL=mSMemberHistoryPagination.js.map