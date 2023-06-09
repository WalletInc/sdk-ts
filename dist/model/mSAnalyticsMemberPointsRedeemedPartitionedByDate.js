"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = void 0;
class MSAnalyticsMemberPointsRedeemedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMemberPointsRedeemedPartitionedByDate.attributeTypeMap;
    }
}
MSAnalyticsMemberPointsRedeemedPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberPointsRedeemedPartitionedByDate.attributeTypeMap = [
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
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = MSAnalyticsMemberPointsRedeemedPartitionedByDate;
//# sourceMappingURL=mSAnalyticsMemberPointsRedeemedPartitionedByDate.js.map