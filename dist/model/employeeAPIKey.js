"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAPIKey = void 0;
class EmployeeAPIKey {
    static getAttributeTypeMap() {
        return EmployeeAPIKey.attributeTypeMap;
    }
}
EmployeeAPIKey.discriminator = undefined;
EmployeeAPIKey.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
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
        "name": "apiKey",
        "baseName": "apiKey",
        "type": "string"
    }
];
exports.EmployeeAPIKey = EmployeeAPIKey;
//# sourceMappingURL=employeeAPIKey.js.map