"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAlert = void 0;
class EmployeeAlert {
    static getAttributeTypeMap() {
        return EmployeeAlert.attributeTypeMap;
    }
}
exports.EmployeeAlert = EmployeeAlert;
EmployeeAlert.discriminator = undefined;
EmployeeAlert.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "s3Bucket",
        "baseName": "S3Bucket",
        "type": "string"
    },
    {
        "name": "s3Key",
        "baseName": "S3Key",
        "type": "string"
    },
    {
        "name": "fileSizeBytes",
        "baseName": "fileSizeBytes",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
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
        "name": "isRead",
        "baseName": "isRead",
        "type": "boolean"
    }
];
//# sourceMappingURL=employeeAlert.js.map