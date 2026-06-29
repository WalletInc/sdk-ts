"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTFetchWalletPaymentObjectsWithToken = void 0;
class WTFetchWalletPaymentObjectsWithToken extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTFetchWalletPaymentObjectsWithToken.attributeTypeMap);
    }
}
exports.WTFetchWalletPaymentObjectsWithToken = WTFetchWalletPaymentObjectsWithToken;
WTFetchWalletPaymentObjectsWithToken.discriminator = undefined;
WTFetchWalletPaymentObjectsWithToken.attributeTypeMap = [
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "pageType",
        "baseName": "pageType",
        "type": "any"
    },
    {
        "name": "isRefresh",
        "baseName": "isRefresh",
        "type": "any"
    },
    {
        "name": "referrer",
        "baseName": "referrer",
        "type": "any"
    }
];
//# sourceMappingURL=wTFetchWalletPaymentObjectsWithToken.js.map