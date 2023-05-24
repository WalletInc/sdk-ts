"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierHistoryPagination = void 0;
class MSMembershipTierHistoryPagination {
    static getAttributeTypeMap() {
        return MSMembershipTierHistoryPagination.attributeTypeMap;
    }
}
MSMembershipTierHistoryPagination.discriminator = undefined;
MSMembershipTierHistoryPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMembershipTierHistory>"
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
exports.MSMembershipTierHistoryPagination = MSMembershipTierHistoryPagination;
//# sourceMappingURL=mSMembershipTierHistoryPagination.js.map