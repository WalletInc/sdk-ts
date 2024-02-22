"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTierWithMemberCount = void 0;
class WTMembershipTierWithMemberCount {
    static getAttributeTypeMap() {
        return WTMembershipTierWithMemberCount.attributeTypeMap;
    }
}
exports.WTMembershipTierWithMemberCount = WTMembershipTierWithMemberCount;
WTMembershipTierWithMemberCount.discriminator = undefined;
WTMembershipTierWithMemberCount.attributeTypeMap = [
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
        "type": "WTMembershipTierId"
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
        "name": "memberCount",
        "baseName": "memberCount",
        "type": "number"
    }
];
//# sourceMappingURL=wTMembershipTierWithMemberCount.js.map