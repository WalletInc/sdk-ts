"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberHistory = void 0;
class MSMemberHistory extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMemberHistory.attributeTypeMap);
    }
}
exports.MSMemberHistory = MSMemberHistory;
MSMemberHistory.discriminator = undefined;
MSMemberHistory.attributeTypeMap = [
    {
        "name": "memberIdentifier",
        "baseName": "memberIdentifier",
        "type": "any"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "membershipTierID",
        "baseName": "membershipTierID",
        "type": "string"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "birthday",
        "baseName": "birthday",
        "type": "any"
    },
    {
        "name": "pointsAccrued",
        "baseName": "pointsAccrued",
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
//# sourceMappingURL=mSMemberHistory.js.map