"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAuditLog = void 0;
class RoleAuditLog {
    static getAttributeTypeMap() {
        return RoleAuditLog.attributeTypeMap;
    }
}
exports.RoleAuditLog = RoleAuditLog;
RoleAuditLog.discriminator = undefined;
RoleAuditLog.attributeTypeMap = [
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
        "name": "roleName",
        "baseName": "roleName",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "actionByEmployeeID",
        "baseName": "actionByEmployeeID",
        "type": "string"
    },
    {
        "name": "actionByEmployeeName",
        "baseName": "actionByEmployeeName",
        "type": "string"
    },
    {
        "name": "actionOnEmployeeID",
        "baseName": "actionOnEmployeeID",
        "type": "string"
    },
    {
        "name": "actionOnEmployeeName",
        "baseName": "actionOnEmployeeName",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "isSystem",
        "baseName": "isSystem",
        "type": "boolean"
    }
];
//# sourceMappingURL=roleAuditLog.js.map