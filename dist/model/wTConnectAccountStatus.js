"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectAccountStatus = void 0;
class WTConnectAccountStatus extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectAccountStatus.attributeTypeMap);
    }
}
exports.WTConnectAccountStatus = WTConnectAccountStatus;
WTConnectAccountStatus.discriminator = undefined;
WTConnectAccountStatus.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "any"
    },
    {
        "name": "onboardingStatus",
        "baseName": "onboardingStatus",
        "type": "WTConnectOnboardingStatus"
    },
    {
        "name": "detailsSubmitted",
        "baseName": "detailsSubmitted",
        "type": "any"
    },
    {
        "name": "chargesEnabled",
        "baseName": "chargesEnabled",
        "type": "any"
    },
    {
        "name": "payoutsEnabled",
        "baseName": "payoutsEnabled",
        "type": "any"
    },
    {
        "name": "ecommerceEligible",
        "baseName": "ecommerceEligible",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectAccountStatus.js.map