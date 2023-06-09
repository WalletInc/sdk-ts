"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantURLUpdate = void 0;
class WTMerchantURLUpdate {
    static getAttributeTypeMap() {
        return WTMerchantURLUpdate.attributeTypeMap;
    }
}
WTMerchantURLUpdate.discriminator = undefined;
WTMerchantURLUpdate.attributeTypeMap = [
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
exports.WTMerchantURLUpdate = WTMerchantURLUpdate;
//# sourceMappingURL=wTMerchantURLUpdate.js.map