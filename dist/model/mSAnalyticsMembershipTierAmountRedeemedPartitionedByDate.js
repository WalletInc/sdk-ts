"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = void 0;
class MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap;
    }
}
exports.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate = MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate;
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
//# sourceMappingURL=mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.js.map