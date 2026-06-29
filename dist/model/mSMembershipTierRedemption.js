"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierRedemption = void 0;
class MSMembershipTierRedemption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMembershipTierRedemption.attributeTypeMap);
    }
}
exports.MSMembershipTierRedemption = MSMembershipTierRedemption;
MSMembershipTierRedemption.discriminator = undefined;
MSMembershipTierRedemption.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
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
        "name": "tierID",
        "baseName": "tierID",
        "type": "any"
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
//# sourceMappingURL=mSMembershipTierRedemption.js.map