"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherUpdateParams = void 0;
class WTStaticVoucherUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTStaticVoucherUpdateParams.attributeTypeMap);
    }
}
exports.WTStaticVoucherUpdateParams = WTStaticVoucherUpdateParams;
WTStaticVoucherUpdateParams.discriminator = undefined;
WTStaticVoucherUpdateParams.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "any"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "any"
    }
];
//# sourceMappingURL=wTStaticVoucherUpdateParams.js.map