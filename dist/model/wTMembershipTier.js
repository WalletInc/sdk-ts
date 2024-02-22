"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMembershipTier {
    static getAttributeTypeMap() {
        return WTMembershipTier.attributeTypeMap;
    }
}
WTMembershipTier.discriminator = undefined;
WTMembershipTier.attributeTypeMap = [
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
    }
];
exports.WTMembershipTier = WTMembershipTier;
//# sourceMappingURL=wTMembershipTier.js.map