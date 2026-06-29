"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberRedemption = void 0;
class MSMemberRedemption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMemberRedemption.attributeTypeMap);
    }
}
exports.MSMemberRedemption = MSMemberRedemption;
MSMemberRedemption.discriminator = undefined;
MSMemberRedemption.attributeTypeMap = [
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
        "name": "points",
        "baseName": "points",
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
        "name": "memberID",
        "baseName": "memberID",
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
//# sourceMappingURL=mSMemberRedemption.js.map