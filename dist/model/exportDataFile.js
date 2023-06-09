"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportDataFile = void 0;
class ExportDataFile {
    static getAttributeTypeMap() {
        return ExportDataFile.attributeTypeMap;
    }
}
ExportDataFile.discriminator = undefined;
ExportDataFile.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "isRead",
        "baseName": "isRead",
        "type": "boolean"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "s3Bucket",
        "baseName": "s3Bucket",
        "type": "string"
    },
    {
        "name": "s3Key",
        "baseName": "s3Key",
        "type": "string"
    },
    {
        "name": "fileSizeBytes",
        "baseName": "fileSizeBytes",
        "type": "number"
    }
];
exports.ExportDataFile = ExportDataFile;
//# sourceMappingURL=exportDataFile.js.map