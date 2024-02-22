"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherCreateParams = void 0;
class WTStaticVoucherCreateParams {
    static getAttributeTypeMap() {
        return WTStaticVoucherCreateParams.attributeTypeMap;
    }
}
exports.WTStaticVoucherCreateParams = WTStaticVoucherCreateParams;
WTStaticVoucherCreateParams.discriminator = undefined;
WTStaticVoucherCreateParams.attributeTypeMap = [
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "number"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "string"
    },
    {
        "name": "campaignID",
        "baseName": "campaignID",
        "type": "WTWalletPageViewId"
    }
];
//# sourceMappingURL=wTStaticVoucherCreateParams.js.map