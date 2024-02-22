"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTRole {
    static getAttributeTypeMap() {
        return WTRole.attributeTypeMap;
    }
}
WTRole.discriminator = undefined;
WTRole.attributeTypeMap = [
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
exports.WTRole = WTRole;
//# sourceMappingURL=wTRole.js.map