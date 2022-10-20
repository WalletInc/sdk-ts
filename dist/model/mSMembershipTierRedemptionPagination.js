"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierRedemptionPagination = void 0;
class MSMembershipTierRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMembershipTierRedemptionPagination.attributeTypeMap;
    }
}
exports.MSMembershipTierRedemptionPagination = MSMembershipTierRedemptionPagination;
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
//# sourceMappingURL=mSMembershipTierRedemptionPagination.js.map