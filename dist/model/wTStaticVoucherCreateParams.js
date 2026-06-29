"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherCreateParams = void 0;
class WTStaticVoucherCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTStaticVoucherCreateParams.attributeTypeMap);
    }
}
exports.WTStaticVoucherCreateParams = WTStaticVoucherCreateParams;
WTStaticVoucherCreateParams.discriminator = undefined;
WTStaticVoucherCreateParams.attributeTypeMap = [
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "any"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "any"
    },
    {
        "name": "campaignID",
        "baseName": "campaignID",
        "type": "StaticVoucherId"
    }
];
//# sourceMappingURL=wTStaticVoucherCreateParams.js.map