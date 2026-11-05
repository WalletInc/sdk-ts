"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemSearchResults = void 0;
class WTRelatedItemSearchResults extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemSearchResults.attributeTypeMap);
    }
}
exports.WTRelatedItemSearchResults = WTRelatedItemSearchResults;
WTRelatedItemSearchResults.discriminator = undefined;
WTRelatedItemSearchResults.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "hasMore",
        "baseName": "hasMore",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItemSearchResults.js.map