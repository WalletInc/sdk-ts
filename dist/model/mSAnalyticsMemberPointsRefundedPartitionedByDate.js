"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberPointsRefundedPartitionedByDate = void 0;
class MSAnalyticsMemberPointsRefundedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMemberPointsRefundedPartitionedByDate.attributeTypeMap;
    }
}
exports.MSAnalyticsMemberPointsRefundedPartitionedByDate = MSAnalyticsMemberPointsRefundedPartitionedByDate;
MSAnalyticsMemberPointsRefundedPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberPointsRefundedPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "points",
        "baseName": "points",
        "type": "number"
    }
];
//# sourceMappingURL=mSAnalyticsMemberPointsRefundedPartitionedByDate.js.map