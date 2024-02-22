"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    static getAttributeTypeMap() {
        return Role.attributeTypeMap;
    }
}
Role.discriminator = undefined;
Role.attributeTypeMap = [
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
        "name": "employees",
        "baseName": "employees",
        "type": "Array<WTEmployee>"
    },
    {
        "name": "roles",
        "baseName": "roles",
        "type": "Array<WTRole>"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "isPublic",
        "baseName": "isPublic",
        "type": "boolean"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "isSystem",
        "baseName": "isSystem",
        "type": "boolean"
    },
    {
        "name": "icons",
        "baseName": "icons",
        "type": "Array<string>"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "adminPage",
        "baseName": "adminPage",
        "type": "string"
    }
];
exports.Role = Role;
//# sourceMappingURL=role.js.map