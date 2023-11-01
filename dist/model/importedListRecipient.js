"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportedListRecipient = void 0;
class ImportedListRecipient {
    static getAttributeTypeMap() {
        return ImportedListRecipient.attributeTypeMap;
    }
}
exports.ImportedListRecipient = ImportedListRecipient;
ImportedListRecipient.discriminator = undefined;
ImportedListRecipient.attributeTypeMap = [
    {
        "name": "importedListID",
        "baseName": "importedListID",
        "type": "string"
    },
    {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
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
        "name": "optedStatus",
        "baseName": "optedStatus",
        "type": "boolean"
    }
];
//# sourceMappingURL=importedListRecipient.js.map