"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReachPerformanceStats = void 0;
class ReachPerformanceStats {
    static getAttributeTypeMap() {
        return ReachPerformanceStats.attributeTypeMap;
    }
}
exports.ReachPerformanceStats = ReachPerformanceStats;
ReachPerformanceStats.discriminator = undefined;
ReachPerformanceStats.attributeTypeMap = [
    {
        "name": "sentCount",
        "baseName": "sentCount",
        "type": "number"
    },
    {
        "name": "deliveredCount",
        "baseName": "deliveredCount",
        "type": "number"
    },
    {
        "name": "failedCount",
        "baseName": "failedCount",
        "type": "number"
    },
    {
        "name": "undeliveredCount",
        "baseName": "undeliveredCount",
        "type": "number"
    },
    {
        "name": "viewedCount",
        "baseName": "viewedCount",
        "type": "number"
    },
    {
        "name": "redemptionsCount",
        "baseName": "redemptionsCount",
        "type": "number"
    },
    {
        "name": "valueClaimed",
        "baseName": "valueClaimed",
        "type": "number"
    },
    {
        "name": "revenueGenerated",
        "baseName": "revenueGenerated",
        "type": "number"
    },
    {
        "name": "refundsCount",
        "baseName": "refundsCount",
        "type": "number"
    },
    {
        "name": "valueRefunded",
        "baseName": "valueRefunded",
        "type": "number"
    },
    {
        "name": "revenueLost",
        "baseName": "revenueLost",
        "type": "number"
    }
];
//# sourceMappingURL=reachPerformanceStats.js.map