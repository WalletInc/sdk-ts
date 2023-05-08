"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTFetchWalletPaymentObjectWithToken = void 0;
class WTFetchWalletPaymentObjectWithToken {
    static getAttributeTypeMap() {
        return WTFetchWalletPaymentObjectWithToken.attributeTypeMap;
    }
}
WTFetchWalletPaymentObjectWithToken.discriminator = undefined;
WTFetchWalletPaymentObjectWithToken.attributeTypeMap = [
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
    }
];
exports.WTFetchWalletPaymentObjectWithToken = WTFetchWalletPaymentObjectWithToken;
//# sourceMappingURL=wTFetchWalletPaymentObjectWithToken.js.map