"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberCountPartitionedByDate = void 0;
class MSAnalyticsMemberCountPartitionedByDate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap);
    }
}
exports.MSAnalyticsMemberCountPartitionedByDate = MSAnalyticsMemberCountPartitionedByDate;
MSAnalyticsMemberCountPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "any"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    }
];
//# sourceMappingURL=mSAnalyticsMemberCountPartitionedByDate.js.map