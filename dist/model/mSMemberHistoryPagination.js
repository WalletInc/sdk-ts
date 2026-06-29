"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberHistoryPagination = void 0;
class MSMemberHistoryPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMemberHistoryPagination.attributeTypeMap);
    }
}
exports.MSMemberHistoryPagination = MSMemberHistoryPagination;
MSMemberHistoryPagination.discriminator = undefined;
MSMemberHistoryPagination.attributeTypeMap = [
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
//# sourceMappingURL=mSMemberHistoryPagination.js.map