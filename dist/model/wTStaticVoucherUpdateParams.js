"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherUpdateParams = void 0;
class WTStaticVoucherUpdateParams {
    static getAttributeTypeMap() {
        return WTStaticVoucherUpdateParams.attributeTypeMap;
    }
}
exports.WTStaticVoucherUpdateParams = WTStaticVoucherUpdateParams;
WTStaticVoucherUpdateParams.discriminator = undefined;
WTStaticVoucherUpdateParams.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "offerAmountCents",
        "baseName": "offerAmountCents",
        "type": "number"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "string"
    }
];
//# sourceMappingURL=wTStaticVoucherUpdateParams.js.map