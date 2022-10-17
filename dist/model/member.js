"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    static getAttributeTypeMap() {
        return Member.attributeTypeMap;
    }
}
exports.Member = Member;
Member.discriminator = undefined;
Member.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
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
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "membershipTierID",
        "baseName": "membershipTierID",
        "type": "string"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    },
    {
        "name": "pointsAccrued",
        "baseName": "pointsAccrued",
        "type": "number"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "membershipTierRedeemableID",
        "baseName": "membershipTierRedeemableID",
        "type": "string"
    }
];
//# sourceMappingURL=member.js.map