"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAuditLog = void 0;
class RoleAuditLog extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RoleAuditLog.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "roleName",
        "baseName": "roleName",
        "type": "any"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "actionOnEmployeeID",
        "baseName": "actionOnEmployeeID",
        "type": "string"
    },
    {
        "name": "actionOnEmployeeName",
        "baseName": "actionOnEmployeeName",
        "type": "any"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "any"
    },
    {
        "name": "isSystem",
        "baseName": "isSystem",
        "type": "any"
    }
];
//# sourceMappingURL=roleAuditLog.js.map