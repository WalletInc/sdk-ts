"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = void 0;
class MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap);
    }
}
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate;
MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.discriminator = undefined;
MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "any"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "any"
    }
];
//# sourceMappingURL=mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.js.map