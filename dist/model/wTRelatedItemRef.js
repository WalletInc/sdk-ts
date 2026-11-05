"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemRef = void 0;
class WTRelatedItemRef extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemRef.attributeTypeMap);
    }
}
exports.WTRelatedItemRef = WTRelatedItemRef;
WTRelatedItemRef.discriminator = undefined;
WTRelatedItemRef.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "WTRelatedItemType"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItemRef.js.map