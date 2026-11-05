"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletSectionViews = void 0;
class WTWalletSectionViews extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletSectionViews.attributeTypeMap);
    }
}
exports.WTWalletSectionViews = WTWalletSectionViews;
WTWalletSectionViews.discriminator = undefined;
WTWalletSectionViews.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "sectionPrefix",
        "baseName": "sectionPrefix",
        "type": "any"
    },
    {
        "name": "listViews",
        "baseName": "listViews",
        "type": "number"
    },
    {
        "name": "itemViews",
        "baseName": "itemViews",
        "type": "number"
    },
    {
        "name": "views",
        "baseName": "views",
        "type": "number"
    },
    {
        "name": "itemPrefix",
        "baseName": "itemPrefix",
        "type": "any"
    },
    {
        "name": "topItems",
        "baseName": "topItems",
        "type": "any"
    }
];
//# sourceMappingURL=wTWalletSectionViews.js.map