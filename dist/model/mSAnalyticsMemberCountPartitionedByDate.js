"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberCountPartitionedByDate = void 0;
class MSAnalyticsMemberCountPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap;
    }
}
MSAnalyticsMemberCountPartitionedByDate.discriminator = undefined;
MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.MSAnalyticsMemberCountPartitionedByDate = MSAnalyticsMemberCountPartitionedByDate;
//# sourceMappingURL=mSAnalyticsMemberCountPartitionedByDate.js.map