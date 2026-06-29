"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTier = void 0;
class WTMembershipTier extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMembershipTier.attributeTypeMap);
    }
}
exports.WTMembershipTier = WTMembershipTier;
WTMembershipTier.discriminator = undefined;
WTMembershipTier.attributeTypeMap = [
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTMembershipTier.js.map