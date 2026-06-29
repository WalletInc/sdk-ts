"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReachPerformanceStats = void 0;
class ReachPerformanceStats extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ReachPerformanceStats.attributeTypeMap);
    }
}
exports.ReachPerformanceStats = ReachPerformanceStats;
ReachPerformanceStats.discriminator = undefined;
ReachPerformanceStats.attributeTypeMap = [
    {
        "name": "sentCount",
        "baseName": "sentCount",
        "type": "any"
    },
    {
        "name": "deliveredCount",
        "baseName": "deliveredCount",
        "type": "any"
    },
    {
        "name": "failedCount",
        "baseName": "failedCount",
        "type": "any"
    },
    {
        "name": "undeliveredCount",
        "baseName": "undeliveredCount",
        "type": "any"
    },
    {
        "name": "viewedCount",
        "baseName": "viewedCount",
        "type": "any"
    },
    {
        "name": "redemptionsCount",
        "baseName": "redemptionsCount",
        "type": "any"
    },
    {
        "name": "valueClaimed",
        "baseName": "valueClaimed",
        "type": "any"
    },
    {
        "name": "revenueGenerated",
        "baseName": "revenueGenerated",
        "type": "any"
    },
    {
        "name": "refundsCount",
        "baseName": "refundsCount",
        "type": "any"
    },
    {
        "name": "valueRefunded",
        "baseName": "valueRefunded",
        "type": "any"
    },
    {
        "name": "revenueLost",
        "baseName": "revenueLost",
        "type": "any"
    }
];
//# sourceMappingURL=reachPerformanceStats.js.map