"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletItemRedemption = void 0;
class WTWalletItemRedemption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletItemRedemption.attributeTypeMap);
    }
}
exports.WTWalletItemRedemption = WTWalletItemRedemption;
WTWalletItemRedemption.discriminator = undefined;
WTWalletItemRedemption.attributeTypeMap = [
    {
        "name": "checkAmount",
        "baseName": "checkAmount",
        "type": "any"
    },
    {
        "name": "transactionNumber",
        "baseName": "transactionNumber",
        "type": "any"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "any"
    }
];
//# sourceMappingURL=wTWalletItemRedemption.js.map