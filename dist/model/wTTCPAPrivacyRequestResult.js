"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAPrivacyRequestResult = void 0;
class WTTCPAPrivacyRequestResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTCPAPrivacyRequestResult.attributeTypeMap);
    }
}
exports.WTTCPAPrivacyRequestResult = WTTCPAPrivacyRequestResult;
WTTCPAPrivacyRequestResult.discriminator = undefined;
WTTCPAPrivacyRequestResult.attributeTypeMap = [
    {
        "name": "filter",
        "baseName": "filter",
        "type": "WTTCPAFilter"
    },
    {
        "name": "alreadySuppressed",
        "baseName": "alreadySuppressed",
        "type": "any"
    }
];
//# sourceMappingURL=wTTCPAPrivacyRequestResult.js.map