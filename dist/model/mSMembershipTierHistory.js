"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMembershipTierHistory = void 0;
class MSMembershipTierHistory {
    static getAttributeTypeMap() {
        return MSMembershipTierHistory.attributeTypeMap;
    }
}
MSMembershipTierHistory.discriminator = undefined;
MSMembershipTierHistory.attributeTypeMap = [
    {
        "name": "tierNumber",
        "baseName": "tierNumber",
        "type": "string"
    },
    {
        "name": "tierName",
        "baseName": "tierName",
        "type": "string"
    },
    {
        "name": "tierDiscount",
        "baseName": "tierDiscount",
        "type": "number"
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
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "tierID",
        "baseName": "tierID",
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
exports.MSMembershipTierHistory = MSMembershipTierHistory;
//# sourceMappingURL=mSMembershipTierHistory.js.map