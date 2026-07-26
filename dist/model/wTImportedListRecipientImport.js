"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImportedListRecipientImport = void 0;
class WTImportedListRecipientImport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTImportedListRecipientImport.attributeTypeMap);
    }
}
exports.WTImportedListRecipientImport = WTImportedListRecipientImport;
WTImportedListRecipientImport.discriminator = undefined;
WTImportedListRecipientImport.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "any"
    },
    {
        "name": "consentBasis",
        "baseName": "consentBasis",
        "type": "WTImportConsentBasis"
    },
    {
        "name": "consentAttested",
        "baseName": "consentAttested",
        "type": "any"
    }
];
//# sourceMappingURL=wTImportedListRecipientImport.js.map