"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItems = void 0;
class WTRelatedItems extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItems.attributeTypeMap);
    }
}
exports.WTRelatedItems = WTRelatedItems;
WTRelatedItems.discriminator = undefined;
WTRelatedItems.attributeTypeMap = [
    {
        "name": "sourceType",
        "baseName": "sourceType",
        "type": "WTRelatedItemSourceType"
    },
    {
        "name": "sourceId",
        "baseName": "sourceId",
        "type": "any"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItems.js.map