"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectOnboardingLinkResponse = void 0;
class WTConnectOnboardingLinkResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectOnboardingLinkResponse.attributeTypeMap);
    }
}
exports.WTConnectOnboardingLinkResponse = WTConnectOnboardingLinkResponse;
WTConnectOnboardingLinkResponse.discriminator = undefined;
WTConnectOnboardingLinkResponse.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "expiresAt",
        "baseName": "expiresAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectOnboardingLinkResponse.js.map