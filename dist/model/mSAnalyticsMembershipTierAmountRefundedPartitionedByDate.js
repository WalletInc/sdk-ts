"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMembershipTierAmountRefundedPartitionedByDate = void 0;
class MSAnalyticsMembershipTierAmountRefundedPartitionedByDate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.attributeTypeMap);
    }
}
exports.MSAnalyticsMembershipTierAmountRefundedPartitionedByDate = MSAnalyticsMembershipTierAmountRefundedPartitionedByDate;
MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.discriminator = undefined;
MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.attributeTypeMap = [
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
//# sourceMappingURL=mSAnalyticsMembershipTierAmountRefundedPartitionedByDate.js.map