"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSImportedListCreate = void 0;
class WTSMSImportedListCreate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSMSImportedListCreate.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "listName",
        "baseName": "listName",
        "type": "any"
    }
];
//# sourceMappingURL=wTSMSImportedListCreate.js.map