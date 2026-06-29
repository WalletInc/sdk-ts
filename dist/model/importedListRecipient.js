"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportedListRecipient = void 0;
class ImportedListRecipient extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportedListRecipient.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
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
    },
    {
        "name": "optedStatus",
        "baseName": "optedStatus",
        "type": "any"
    }
];
//# sourceMappingURL=importedListRecipient.js.map