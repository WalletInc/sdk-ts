"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMembershipTierCreationParams {
    static getAttributeTypeMap() {
        return WTMembershipTierCreationParams.attributeTypeMap;
    }
}
WTMembershipTierCreationParams.discriminator = undefined;
WTMembershipTierCreationParams.attributeTypeMap = [
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
exports.WTMembershipTierCreationParams = WTMembershipTierCreationParams;
//# sourceMappingURL=wTMembershipTierCreationParams.js.map