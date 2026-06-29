"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberCreationParams = void 0;
class WTMemberCreationParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberCreationParams.attributeTypeMap);
    }
}
exports.WTMemberCreationParams = WTMemberCreationParams;
WTMemberCreationParams.discriminator = undefined;
WTMemberCreationParams.attributeTypeMap = [
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
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    }
];
//# sourceMappingURL=wTMemberCreationParams.js.map