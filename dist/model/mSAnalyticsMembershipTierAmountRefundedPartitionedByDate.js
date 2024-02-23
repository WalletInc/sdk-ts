"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMembershipTierAmountRefundedPartitionedByDate = void 0;
class MSAnalyticsMembershipTierAmountRefundedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.attributeTypeMap;
    }
}
exports.MSAnalyticsMembershipTierAmountRefundedPartitionedByDate = MSAnalyticsMembershipTierAmountRefundedPartitionedByDate;
MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.discriminator = undefined;
MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.attributeTypeMap = [
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
//# sourceMappingURL=mSAnalyticsMembershipTierAmountRefundedPartitionedByDate.js.map