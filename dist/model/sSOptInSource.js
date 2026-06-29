"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOptInSource = void 0;
class SSOptInSource extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SSOptInSource.attributeTypeMap);
    }
}
exports.SSOptInSource = SSOptInSource;
SSOptInSource.discriminator = undefined;
SSOptInSource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    },
    {
        "name": "sourceName",
        "baseName": "sourceName",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=sSOptInSource.js.map