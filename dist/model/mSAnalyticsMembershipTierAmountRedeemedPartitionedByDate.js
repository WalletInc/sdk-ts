"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = void 0;
class MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap;
    }
}
MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.discriminator = undefined;
MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    }
];
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate;
//# sourceMappingURL=mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.js.map