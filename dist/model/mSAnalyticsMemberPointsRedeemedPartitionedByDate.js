"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = void 0;
class MSAnalyticsMemberPointsRedeemedPartitionedByDate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSAnalyticsMemberPointsRedeemedPartitionedByDate.attributeTypeMap);
    }
}
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = MSAnalyticsMemberPointsRedeemedPartitionedByDate;
MSAnalyticsMemberPointsRedeemedPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberPointsRedeemedPartitionedByDate.attributeTypeMap = [
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
//# sourceMappingURL=mSAnalyticsMemberPointsRedeemedPartitionedByDate.js.map