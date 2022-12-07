"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeUpdate = void 0;
class WTEmployeeUpdate {
    static getAttributeTypeMap() {
        return WTEmployeeUpdate.attributeTypeMap;
    }
}
exports.WTEmployeeUpdate = WTEmployeeUpdate;
WTEmployeeUpdate.discriminator = undefined;
WTEmployeeUpdate.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
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
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeUpdate.js.map