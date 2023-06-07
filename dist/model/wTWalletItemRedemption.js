"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletItemRedemption = void 0;
class WTWalletItemRedemption {
    static getAttributeTypeMap() {
        return WTWalletItemRedemption.attributeTypeMap;
    }
}
exports.WTWalletItemRedemption = WTWalletItemRedemption;
WTWalletItemRedemption.discriminator = undefined;
WTWalletItemRedemption.attributeTypeMap = [
    {
        "name": "checkAmount",
        "baseName": "checkAmount",
        "type": "number"
    },
    {
        "name": "transactionNumber",
        "baseName": "transactionNumber",
        "type": "string"
    },
    {
        "name": "metaValue",
        "baseName": "metaValue",
        "type": "string"
    }
];
//# sourceMappingURL=wTWalletItemRedemption.js.map