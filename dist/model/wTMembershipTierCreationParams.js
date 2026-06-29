"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTierCreationParams = void 0;
class WTMembershipTierCreationParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMembershipTierCreationParams.attributeTypeMap);
    }
}
exports.WTMembershipTierCreationParams = WTMembershipTierCreationParams;
WTMembershipTierCreationParams.discriminator = undefined;
WTMembershipTierCreationParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTMembershipTierCreationParams.js.map