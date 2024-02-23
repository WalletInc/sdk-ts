"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTierUpdateParams = void 0;
class WTMembershipTierUpdateParams {
    static getAttributeTypeMap() {
        return WTMembershipTierUpdateParams.attributeTypeMap;
    }
}
exports.WTMembershipTierUpdateParams = WTMembershipTierUpdateParams;
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
//# sourceMappingURL=wTMembershipTierUpdateParams.js.map