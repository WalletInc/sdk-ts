"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierRedemptionPagination = void 0;
class MSMembershipTierRedemptionPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMembershipTierRedemptionPagination.attributeTypeMap);
    }
}
exports.MSMembershipTierRedemptionPagination = MSMembershipTierRedemptionPagination;
MSMembershipTierRedemptionPagination.discriminator = undefined;
MSMembershipTierRedemptionPagination.attributeTypeMap = [
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
//# sourceMappingURL=mSMembershipTierRedemptionPagination.js.map