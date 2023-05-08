"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierRedemption = void 0;
class MSMembershipTierRedemption {
    static getAttributeTypeMap() {
        return MSMembershipTierRedemption.attributeTypeMap;
    }
}
MSMembershipTierRedemption.discriminator = undefined;
MSMembershipTierRedemption.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
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
        "name": "tierID",
        "baseName": "tierID",
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
exports.MSMembershipTierRedemption = MSMembershipTierRedemption;
//# sourceMappingURL=mSMembershipTierRedemption.js.map