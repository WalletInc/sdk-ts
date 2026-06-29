"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletPageViewCount = void 0;
class WTWalletPageViewCount extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletPageViewCount.attributeTypeMap);
    }
}
exports.WTWalletPageViewCount = WTWalletPageViewCount;
WTWalletPageViewCount.discriminator = undefined;
WTWalletPageViewCount.attributeTypeMap = [
    {
        "name": "walletObjectID",
        "baseName": "walletObjectID",
        "type": "any"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    },
    {
        "name": "dateOccurred",
        "baseName": "dateOccurred",
        "type": "any"
    },
    {
        "name": "walletObjectName",
        "baseName": "walletObjectName",
        "type": "any"
    }
];
//# sourceMappingURL=wTWalletPageViewCount.js.map