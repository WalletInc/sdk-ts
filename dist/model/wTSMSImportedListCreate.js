"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSImportedListCreate = void 0;
class WTSMSImportedListCreate {
    static getAttributeTypeMap() {
        return WTSMSImportedListCreate.attributeTypeMap;
    }
}
WTSMSImportedListCreate.discriminator = undefined;
WTSMSImportedListCreate.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
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
    }
];
exports.WTSMSImportedListCreate = WTSMSImportedListCreate;
//# sourceMappingURL=wTSMSImportedListCreate.js.map