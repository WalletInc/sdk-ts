"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSImportedListRecipientCreateParams = void 0;
class SSImportedListRecipientCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SSImportedListRecipientCreateParams.attributeTypeMap);
    }
}
exports.SSImportedListRecipientCreateParams = SSImportedListRecipientCreateParams;
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
        "type": "any"
    }
];
//# sourceMappingURL=sSImportedListRecipientCreateParams.js.map