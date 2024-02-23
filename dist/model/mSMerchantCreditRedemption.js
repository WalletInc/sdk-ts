"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditRedemption = void 0;
class MSMerchantCreditRedemption {
    static getAttributeTypeMap() {
        return MSMerchantCreditRedemption.attributeTypeMap;
    }
}
exports.MSMerchantCreditRedemption = MSMerchantCreditRedemption;
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
        "type": "MSMemberRedemptionTransactionType"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID"
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
//# sourceMappingURL=mSMerchantCreditRedemption.js.map