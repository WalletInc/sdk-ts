"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMediaProcessedReport = void 0;
class WTMediaProcessedReport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMediaProcessedReport.attributeTypeMap);
    }
}
exports.WTMediaProcessedReport = WTMediaProcessedReport;
WTMediaProcessedReport.discriminator = undefined;
WTMediaProcessedReport.attributeTypeMap = [
    {
        "name": "originalKey",
        "baseName": "originalKey",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTMediaProcessedReportStatus"
    },
    {
        "name": "fileURL",
        "baseName": "fileURL",
        "type": "string"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "string"
    },
    {
        "name": "fileSize",
        "baseName": "fileSize",
        "type": "any"
    }
];
//# sourceMappingURL=wTMediaProcessedReport.js.map