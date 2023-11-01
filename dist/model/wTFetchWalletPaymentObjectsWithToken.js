"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTFetchWalletPaymentObjectsWithToken = void 0;
class WTFetchWalletPaymentObjectsWithToken {
    static getAttributeTypeMap() {
        return WTFetchWalletPaymentObjectsWithToken.attributeTypeMap;
    }
}
exports.WTFetchWalletPaymentObjectsWithToken = WTFetchWalletPaymentObjectsWithToken;
WTFetchWalletPaymentObjectsWithToken.discriminator = undefined;
WTFetchWalletPaymentObjectsWithToken.attributeTypeMap = [
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "pageType",
        "baseName": "pageType",
        "type": "string"
    },
    {
        "name": "isRefresh",
        "baseName": "isRefresh",
        "type": "boolean"
    },
    {
        "name": "referrer",
        "baseName": "referrer",
        "type": "string"
    }
];
//# sourceMappingURL=wTFetchWalletPaymentObjectsWithToken.js.map