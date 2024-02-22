"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTWalletItemRedemption {
    static getAttributeTypeMap() {
        return WTWalletItemRedemption.attributeTypeMap;
    }
}
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
exports.WTWalletItemRedemption = WTWalletItemRedemption;
//# sourceMappingURL=wTWalletItemRedemption.js.map