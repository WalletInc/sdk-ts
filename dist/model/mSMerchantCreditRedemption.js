"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditRedemption = void 0;
class MSMerchantCreditRedemption {
    static getAttributeTypeMap() {
        return MSMerchantCreditRedemption.attributeTypeMap;
    }
}
MSMerchantCreditRedemption.discriminator = undefined;
MSMerchantCreditRedemption.attributeTypeMap = [
    {
        "name": "transactionID",
        "baseName": "transactionID",
        "type": "string"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string | number"
    },
    {
        "name": "terminalType",
        "baseName": "terminalType",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantCreditID",
        "baseName": "merchantCreditID",
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
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.MSMerchantCreditRedemption = MSMerchantCreditRedemption;
//# sourceMappingURL=mSMerchantCreditRedemption.js.map