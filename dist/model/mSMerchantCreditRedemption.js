"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditRedemption = void 0;
class MSMerchantCreditRedemption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMerchantCreditRedemption.attributeTypeMap);
    }
}
exports.MSMerchantCreditRedemption = MSMerchantCreditRedemption;
MSMerchantCreditRedemption.discriminator = undefined;
MSMerchantCreditRedemption.attributeTypeMap = [
    {
        "name": "transactionID",
        "baseName": "transactionID",
        "type": "any"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "MSMemberRedemptionTransactionType"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "any"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "MSMemberRedemptionRegisterID"
    },
    {
        "name": "terminalType",
        "baseName": "terminalType",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=mSMerchantCreditRedemption.js.map