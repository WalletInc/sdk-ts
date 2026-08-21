"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTShareActivityReport = void 0;
class WTShareActivityReport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTShareActivityReport.attributeTypeMap);
    }
}
exports.WTShareActivityReport = WTShareActivityReport;
WTShareActivityReport.discriminator = undefined;
WTShareActivityReport.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "windowDays",
        "baseName": "windowDays",
        "type": "any"
    },
    {
        "name": "rows",
        "baseName": "rows",
        "type": "any"
    },
    {
        "name": "totals",
        "baseName": "totals",
        "type": "WTShareActivityRow"
    }
];
//# sourceMappingURL=wTShareActivityReport.js.map