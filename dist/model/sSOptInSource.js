"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOptInSource = void 0;
class SSOptInSource {
    static getAttributeTypeMap() {
        return SSOptInSource.attributeTypeMap;
    }
}
exports.SSOptInSource = SSOptInSource;
SSOptInSource.discriminator = undefined;
SSOptInSource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    },
    {
        "name": "sourceName",
        "baseName": "sourceName",
        "type": "string"
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
    }
];
//# sourceMappingURL=sSOptInSource.js.map