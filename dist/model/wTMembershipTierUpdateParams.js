"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMembershipTierUpdateParams {
    static getAttributeTypeMap() {
        return WTMembershipTierUpdateParams.attributeTypeMap;
    }
}
WTMembershipTierUpdateParams.discriminator = undefined;
WTMembershipTierUpdateParams.attributeTypeMap = [
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
    }
];
exports.WTMembershipTierUpdateParams = WTMembershipTierUpdateParams;
//# sourceMappingURL=wTMembershipTierUpdateParams.js.map