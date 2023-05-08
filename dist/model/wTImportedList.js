"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImportedList = void 0;
class WTImportedList {
    static getAttributeTypeMap() {
        return WTImportedList.attributeTypeMap;
    }
}
WTImportedList.discriminator = undefined;
WTImportedList.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "listName",
        "baseName": "listName",
        "type": "string"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
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
    }
];
exports.WTImportedList = WTImportedList;
//# sourceMappingURL=wTImportedList.js.map