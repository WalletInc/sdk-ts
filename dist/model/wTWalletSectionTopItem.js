"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletSectionTopItem = void 0;
class WTWalletSectionTopItem extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletSectionTopItem.attributeTypeMap);
    }
}
exports.WTWalletSectionTopItem = WTWalletSectionTopItem;
WTWalletSectionTopItem.discriminator = undefined;
WTWalletSectionTopItem.attributeTypeMap = [
    {
        "name": "pageID",
        "baseName": "pageID",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "views",
        "baseName": "views",
        "type": "number"
    }
];
//# sourceMappingURL=wTWalletSectionTopItem.js.map