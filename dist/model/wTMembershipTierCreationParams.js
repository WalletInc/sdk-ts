"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMembershipTierCreationParams = void 0;
class WTMembershipTierCreationParams {
    static getAttributeTypeMap() {
        return WTMembershipTierCreationParams.attributeTypeMap;
    }
}
exports.WTMembershipTierCreationParams = WTMembershipTierCreationParams;
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
//# sourceMappingURL=wTMembershipTierCreationParams.js.map