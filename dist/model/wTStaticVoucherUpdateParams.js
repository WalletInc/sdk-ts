"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTStaticVoucherUpdateParams {
    static getAttributeTypeMap() {
        return WTStaticVoucherUpdateParams.attributeTypeMap;
    }
}
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
exports.WTStaticVoucherUpdateParams = WTStaticVoucherUpdateParams;
//# sourceMappingURL=wTStaticVoucherUpdateParams.js.map