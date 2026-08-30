"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPublicVanityPageMerchant = void 0;
class WTPublicVanityPageMerchant extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPublicVanityPageMerchant.attributeTypeMap);
    }
}
exports.WTPublicVanityPageMerchant = WTPublicVanityPageMerchant;
WTPublicVanityPageMerchant.discriminator = undefined;
WTPublicVanityPageMerchant.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    }
];
//# sourceMappingURL=wTPublicVanityPageMerchant.js.map