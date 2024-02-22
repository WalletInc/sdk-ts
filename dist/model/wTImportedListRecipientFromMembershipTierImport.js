"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTImportedListRecipientFromMembershipTierImport {
    static getAttributeTypeMap() {
        return WTImportedListRecipientFromMembershipTierImport.attributeTypeMap;
    }
}
WTImportedListRecipientFromMembershipTierImport.discriminator = undefined;
WTImportedListRecipientFromMembershipTierImport.attributeTypeMap = [
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
        "name": "tierID",
        "baseName": "tierID",
        "type": "WTImportedListRecipientFromMembershipTierImportTierID"
    }
];
exports.WTImportedListRecipientFromMembershipTierImport = WTImportedListRecipientFromMembershipTierImport;
//# sourceMappingURL=wTImportedListRecipientFromMembershipTierImport.js.map