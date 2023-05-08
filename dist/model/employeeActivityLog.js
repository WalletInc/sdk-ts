"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeActivityLog = void 0;
class EmployeeActivityLog {
    static getAttributeTypeMap() {
        return EmployeeActivityLog.attributeTypeMap;
    }
}
EmployeeActivityLog.discriminator = undefined;
EmployeeActivityLog.attributeTypeMap = [
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
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "route",
        "baseName": "route",
        "type": "string"
    },
    {
        "name": "pageName",
        "baseName": "pageName",
        "type": "string"
    }
];
exports.EmployeeActivityLog = EmployeeActivityLog;
//# sourceMappingURL=employeeActivityLog.js.map