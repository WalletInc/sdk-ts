"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTFetchWalletPaymentObjectsWithToken {
    static getAttributeTypeMap() {
        return WTFetchWalletPaymentObjectsWithToken.attributeTypeMap;
    }
}
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
exports.WTFetchWalletPaymentObjectsWithToken = WTFetchWalletPaymentObjectsWithToken;
//# sourceMappingURL=wTFetchWalletPaymentObjectsWithToken.js.map