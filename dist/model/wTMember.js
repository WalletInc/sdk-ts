"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMember {
    static getAttributeTypeMap() {
        return WTMember.attributeTypeMap;
    }
}
WTMember.discriminator = undefined;
WTMember.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
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
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "birthday",
        "baseName": "birthday",
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
exports.WTMember = WTMember;
//# sourceMappingURL=wTMember.js.map