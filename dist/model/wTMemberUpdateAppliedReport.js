"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberUpdateAppliedReport = void 0;
class WTMemberUpdateAppliedReport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberUpdateAppliedReport.attributeTypeMap);
    }
}
exports.WTMemberUpdateAppliedReport = WTMemberUpdateAppliedReport;
WTMemberUpdateAppliedReport.discriminator = undefined;
WTMemberUpdateAppliedReport.attributeTypeMap = [
    {
        "name": "jobID",
        "baseName": "jobID",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTMemberUpdateAppliedReportStatus"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    }
];
//# sourceMappingURL=wTMemberUpdateAppliedReport.js.map