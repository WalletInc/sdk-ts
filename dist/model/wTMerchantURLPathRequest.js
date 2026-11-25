"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantURLPathRequest = void 0;
class WTMerchantURLPathRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMerchantURLPathRequest.attributeTypeMap);
    }
}
exports.WTMerchantURLPathRequest = WTMerchantURLPathRequest;
WTMerchantURLPathRequest.discriminator = undefined;
WTMerchantURLPathRequest.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "string"
    },
    {
        "name": "sessionID",
        "baseName": "sessionID",
        "type": "string"
    },
    {
        "name": "navigatorAgent",
        "baseName": "navigatorAgent",
        "type": "string"
    },
    {
        "name": "referrer",
        "baseName": "referrer",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "any"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "any"
    }
];
//# sourceMappingURL=wTMerchantURLPathRequest.js.map