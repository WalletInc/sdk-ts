"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportedListRecipient {
    static getAttributeTypeMap() {
        return ImportedListRecipient.attributeTypeMap;
    }
}
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
        "type": "WTWalletPageViewId"
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
exports.ImportedListRecipient = ImportedListRecipient;
//# sourceMappingURL=importedListRecipient.js.map