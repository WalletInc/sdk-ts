"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuCategory = void 0;
class WTMenuCategory extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuCategory.attributeTypeMap);
    }
}
exports.WTMenuCategory = WTMenuCategory;
WTMenuCategory.discriminator = undefined;
WTMenuCategory.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "itemIDs",
        "baseName": "itemIDs",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuCategory.js.map