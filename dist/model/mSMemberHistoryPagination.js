"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MSMemberHistoryPagination {
    static getAttributeTypeMap() {
        return MSMemberHistoryPagination.attributeTypeMap;
    }
}
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
exports.MSMemberHistoryPagination = MSMemberHistoryPagination;
//# sourceMappingURL=mSMemberHistoryPagination.js.map