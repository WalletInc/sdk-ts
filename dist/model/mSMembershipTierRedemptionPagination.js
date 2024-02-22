"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MSMembershipTierRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMembershipTierRedemptionPagination.attributeTypeMap;
    }
}
MSMembershipTierRedemptionPagination.discriminator = undefined;
MSMembershipTierRedemptionPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMembershipTierRedemption>"
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
exports.MSMembershipTierRedemptionPagination = MSMembershipTierRedemptionPagination;
//# sourceMappingURL=mSMembershipTierRedemptionPagination.js.map