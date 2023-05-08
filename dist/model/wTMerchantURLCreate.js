"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantURLCreate = void 0;
class WTMerchantURLCreate {
    static getAttributeTypeMap() {
        return WTMerchantURLCreate.attributeTypeMap;
    }
}
WTMerchantURLCreate.discriminator = undefined;
WTMerchantURLCreate.attributeTypeMap = [
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "destinationURL",
        "baseName": "destinationURL",
        "type": "string"
    }
];
exports.WTMerchantURLCreate = WTMerchantURLCreate;
//# sourceMappingURL=wTMerchantURLCreate.js.map