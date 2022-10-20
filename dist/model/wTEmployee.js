"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployee = void 0;
class WTEmployee {
    static getAttributeTypeMap() {
        return WTEmployee.attributeTypeMap;
    }
}
exports.WTEmployee = WTEmployee;
WTEmployee.discriminator = undefined;
WTEmployee.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "isPublicRepresentative",
        "baseName": "isPublicRepresentative",
        "type": "boolean"
    },
    {
        "name": "walletSequenceNumber",
        "baseName": "walletSequenceNumber",
        "type": "number"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "string"
    },
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
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "emailVerified",
        "baseName": "emailVerified",
        "type": "string"
    },
    {
        "name": "profilePictureURL",
        "baseName": "profilePictureURL",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "sessionToken",
        "baseName": "sessionToken",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployee.js.map