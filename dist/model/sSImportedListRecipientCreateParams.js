"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSImportedListRecipientCreateParams = void 0;
class SSImportedListRecipientCreateParams {
    static getAttributeTypeMap() {
        return SSImportedListRecipientCreateParams.attributeTypeMap;
    }
}
SSImportedListRecipientCreateParams.discriminator = undefined;
SSImportedListRecipientCreateParams.attributeTypeMap = [
    {
        "name": "importedListID",
        "baseName": "importedListID",
        "type": "string"
    },
    {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "string"
    }
];
exports.SSImportedListRecipientCreateParams = SSImportedListRecipientCreateParams;
//# sourceMappingURL=sSImportedListRecipientCreateParams.js.map