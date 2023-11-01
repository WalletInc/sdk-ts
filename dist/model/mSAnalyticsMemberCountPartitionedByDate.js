"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSAnalyticsMemberCountPartitionedByDate = void 0;
class MSAnalyticsMemberCountPartitionedByDate {
    static getAttributeTypeMap() {
        return MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap;
    }
}
exports.MSAnalyticsMemberCountPartitionedByDate = MSAnalyticsMemberCountPartitionedByDate;
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
//# sourceMappingURL=mSAnalyticsMemberCountPartitionedByDate.js.map