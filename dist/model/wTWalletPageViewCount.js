"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletPageViewCount = void 0;
class WTWalletPageViewCount {
    static getAttributeTypeMap() {
        return WTWalletPageViewCount.attributeTypeMap;
    }
}
WTWalletPageViewCount.discriminator = undefined;
WTWalletPageViewCount.attributeTypeMap = [
    {
        "name": "walletObjectID",
        "baseName": "walletObjectID",
        "type": "string"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "walletObjectName",
        "baseName": "walletObjectName",
        "type": "string"
    }
];
exports.WTWalletPageViewCount = WTWalletPageViewCount;
//# sourceMappingURL=wTWalletPageViewCount.js.map