"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemSearchResult = void 0;
class WTRelatedItemSearchResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemSearchResult.attributeTypeMap);
    }
}
exports.WTRelatedItemSearchResult = WTRelatedItemSearchResult;
WTRelatedItemSearchResult.discriminator = undefined;
WTRelatedItemSearchResult.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "WTRelatedItemType"
    },
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
        "name": "thumbnailURL",
        "baseName": "thumbnailURL",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItemSearchResult.js.map