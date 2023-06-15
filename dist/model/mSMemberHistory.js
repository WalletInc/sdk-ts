"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberHistory = void 0;
class MSMemberHistory {
    static getAttributeTypeMap() {
        return MSMemberHistory.attributeTypeMap;
    }
}
MSMemberHistory.discriminator = undefined;
MSMemberHistory.attributeTypeMap = [
    {
        "name": "memberIdentifier",
        "baseName": "memberIdentifier",
        "type": "string"
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
exports.MSMemberHistory = MSMemberHistory;
//# sourceMappingURL=mSMemberHistory.js.map