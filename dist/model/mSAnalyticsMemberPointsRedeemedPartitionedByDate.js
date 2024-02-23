"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = void 0;
class MSAnalyticsMemberPointsRedeemedPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMemberPointsRedeemedPartitionedByDate.attributeTypeMap;
    }
}
exports.MSAnalyticsMemberPointsRedeemedPartitionedByDate = MSAnalyticsMemberPointsRedeemedPartitionedByDate;
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
//# sourceMappingURL=mSAnalyticsMemberPointsRedeemedPartitionedByDate.js.map