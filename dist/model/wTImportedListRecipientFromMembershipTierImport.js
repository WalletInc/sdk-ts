"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTImportedListRecipientFromMembershipTierImport = void 0;
class WTImportedListRecipientFromMembershipTierImport extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTImportedListRecipientFromMembershipTierImport.attributeTypeMap);
    }
}
exports.WTImportedListRecipientFromMembershipTierImport = WTImportedListRecipientFromMembershipTierImport;
WTImportedListRecipientFromMembershipTierImport.discriminator = undefined;
WTImportedListRecipientFromMembershipTierImport.attributeTypeMap = [
    {
        "name": "listName",
        "baseName": "listName",
        "type": "any"
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
//# sourceMappingURL=wTImportedListRecipientFromMembershipTierImport.js.map