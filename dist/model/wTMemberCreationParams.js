"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMemberCreationParams {
    static getAttributeTypeMap() {
        return WTMemberCreationParams.attributeTypeMap;
    }
}
WTMemberCreationParams.discriminator = undefined;
WTMemberCreationParams.attributeTypeMap = [
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
    }
];
exports.WTMemberCreationParams = WTMemberCreationParams;
//# sourceMappingURL=wTMemberCreationParams.js.map