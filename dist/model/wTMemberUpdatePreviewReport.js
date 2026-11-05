"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberUpdatePreviewReport = void 0;
class WTMemberUpdatePreviewReport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberUpdatePreviewReport.attributeTypeMap);
    }
}
exports.WTMemberUpdatePreviewReport = WTMemberUpdatePreviewReport;
WTMemberUpdatePreviewReport.discriminator = undefined;
WTMemberUpdatePreviewReport.attributeTypeMap = [
    {
        "name": "jobID",
        "baseName": "jobID",
        "type": "string"
    },
    {
        "name": "summary",
        "baseName": "summary",
        "type": "any"
    },
    {
        "name": "diffFileKey",
        "baseName": "diffFileKey",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    }
];
//# sourceMappingURL=wTMemberUpdatePreviewReport.js.map