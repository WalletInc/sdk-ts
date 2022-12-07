"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSImportedListCreate = void 0;
class WTSMSImportedListCreate {
    static getAttributeTypeMap() {
        return WTSMSImportedListCreate.attributeTypeMap;
    }
}
exports.WTSMSImportedListCreate = WTSMSImportedListCreate;
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
//# sourceMappingURL=wTSMSImportedListCreate.js.map