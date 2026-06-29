"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberPointsRefundedPartitionedByDate = void 0;
class MSAnalyticsMemberPointsRefundedPartitionedByDate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSAnalyticsMemberPointsRefundedPartitionedByDate.attributeTypeMap);
    }
}
exports.MSAnalyticsMemberPointsRefundedPartitionedByDate = MSAnalyticsMemberPointsRefundedPartitionedByDate;
MSAnalyticsMemberPointsRefundedPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberPointsRefundedPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "any"
    },
    {
        "name": "points",
        "baseName": "points",
        "type": "any"
    }
];
//# sourceMappingURL=mSAnalyticsMemberPointsRefundedPartitionedByDate.js.map