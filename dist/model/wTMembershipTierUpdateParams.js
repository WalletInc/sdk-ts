"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTierUpdateParams = void 0;
class WTMembershipTierUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMembershipTierUpdateParams.attributeTypeMap);
    }
}
exports.WTMembershipTierUpdateParams = WTMembershipTierUpdateParams;
WTMembershipTierUpdateParams.discriminator = undefined;
WTMembershipTierUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTMembershipTierUpdateParams.js.map