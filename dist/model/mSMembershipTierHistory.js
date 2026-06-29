"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierHistory = void 0;
class MSMembershipTierHistory extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMembershipTierHistory.attributeTypeMap);
    }
}
exports.MSMembershipTierHistory = MSMembershipTierHistory;
MSMembershipTierHistory.discriminator = undefined;
MSMembershipTierHistory.attributeTypeMap = [
    {
        "name": "tierNumber",
        "baseName": "tierNumber",
        "type": "any"
    },
    {
        "name": "tierName",
        "baseName": "tierName",
        "type": "any"
    },
    {
        "name": "tierDiscount",
        "baseName": "tierDiscount",
        "type": "any"
    },
    {
        "name": "tierDesignID",
        "baseName": "tierDesignID",
        "type": "string"
    },
    {
        "name": "pointsDesignID",
        "baseName": "pointsDesignID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "tierID",
        "baseName": "tierID",
        "type": "any"
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
//# sourceMappingURL=mSMembershipTierHistory.js.map