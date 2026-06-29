"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletObjectPrefixCounts = void 0;
class WTWalletObjectPrefixCounts extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletObjectPrefixCounts.attributeTypeMap);
    }
}
exports.WTWalletObjectPrefixCounts = WTWalletObjectPrefixCounts;
WTWalletObjectPrefixCounts.discriminator = undefined;
WTWalletObjectPrefixCounts.attributeTypeMap = [
    {
        "name": "walletObjectPrefix",
        "baseName": "walletObjectPrefix",
        "type": "any"
    },
    {
        "name": "walletObjectName",
        "baseName": "walletObjectName",
        "type": "any"
    },
    {
        "name": "list",
        "baseName": "list",
        "type": "any"
    }
];
//# sourceMappingURL=wTWalletObjectPrefixCounts.js.map