"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierHistoryPagination = void 0;
class MSMembershipTierHistoryPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMembershipTierHistoryPagination.attributeTypeMap);
    }
}
exports.MSMembershipTierHistoryPagination = MSMembershipTierHistoryPagination;
MSMembershipTierHistoryPagination.discriminator = undefined;
MSMembershipTierHistoryPagination.attributeTypeMap = [
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
//# sourceMappingURL=mSMembershipTierHistoryPagination.js.map