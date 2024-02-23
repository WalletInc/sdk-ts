"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberRedemption = void 0;
class MSMemberRedemption {
    static getAttributeTypeMap() {
        return MSMemberRedemption.attributeTypeMap;
    }
}
exports.MSMemberRedemption = MSMemberRedemption;
MSMemberRedemption.discriminator = undefined;
MSMemberRedemption.attributeTypeMap = [
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
        "name": "points",
        "baseName": "points",
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
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
//# sourceMappingURL=mSMemberRedemption.js.map