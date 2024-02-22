"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTWalletObjectPrefixCounts {
    static getAttributeTypeMap() {
        return WTWalletObjectPrefixCounts.attributeTypeMap;
    }
}
WTWalletObjectPrefixCounts.discriminator = undefined;
WTWalletObjectPrefixCounts.attributeTypeMap = [
    {
        "name": "walletObjectPrefix",
        "baseName": "walletObjectPrefix",
        "type": "string"
    },
    {
        "name": "walletObjectName",
        "baseName": "walletObjectName",
        "type": "string"
    },
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<WTWalletPageViewCount>"
    }
];
exports.WTWalletObjectPrefixCounts = WTWalletObjectPrefixCounts;
//# sourceMappingURL=wTWalletObjectPrefixCounts.js.map