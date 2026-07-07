"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectOnboardingLinkRequest = void 0;
class WTConnectOnboardingLinkRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectOnboardingLinkRequest.attributeTypeMap);
    }
}
exports.WTConnectOnboardingLinkRequest = WTConnectOnboardingLinkRequest;
WTConnectOnboardingLinkRequest.discriminator = undefined;
WTConnectOnboardingLinkRequest.attributeTypeMap = [
    {
        "name": "returnUrl",
        "baseName": "returnUrl",
        "type": "any"
    },
    {
        "name": "refreshUrl",
        "baseName": "refreshUrl",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectOnboardingLinkRequest.js.map