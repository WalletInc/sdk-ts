"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeAPIKey = void 0;
class WTEmployeeAPIKey {
    static getAttributeTypeMap() {
        return WTEmployeeAPIKey.attributeTypeMap;
    }
}
exports.WTEmployeeAPIKey = WTEmployeeAPIKey;
WTEmployeeAPIKey.discriminator = undefined;
WTEmployeeAPIKey.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeAPIKey.js.map