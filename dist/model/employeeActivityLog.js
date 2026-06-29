"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeActivityLog = void 0;
class EmployeeActivityLog extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmployeeActivityLog.attributeTypeMap);
    }
}
exports.EmployeeActivityLog = EmployeeActivityLog;
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "any"
    },
    {
        "name": "route",
        "baseName": "route",
        "type": "any"
    },
    {
        "name": "pageName",
        "baseName": "pageName",
        "type": "any"
    }
];
//# sourceMappingURL=employeeActivityLog.js.map