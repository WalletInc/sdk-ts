"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemUsage = void 0;
class WTRelatedItemUsage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemUsage.attributeTypeMap);
    }
}
exports.WTRelatedItemUsage = WTRelatedItemUsage;
WTRelatedItemUsage.discriminator = undefined;
WTRelatedItemUsage.attributeTypeMap = [
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
        "name": "title",
        "baseName": "title",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItemUsage.js.map