"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletSectionAccess = void 0;
class WTWalletSectionAccess extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletSectionAccess.attributeTypeMap);
    }
}
exports.WTWalletSectionAccess = WTWalletSectionAccess;
WTWalletSectionAccess.discriminator = undefined;
WTWalletSectionAccess.attributeTypeMap = [
    {
        "name": "section",
        "baseName": "section",
        "type": "any"
    },
    {
        "name": "included",
        "baseName": "included",
        "type": "boolean"
    },
    {
        "name": "lowestTier",
        "baseName": "lowestTier",
        "type": "WTPlanTier"
    }
];
//# sourceMappingURL=wTWalletSectionAccess.js.map