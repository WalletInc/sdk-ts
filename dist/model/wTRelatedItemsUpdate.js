"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemsUpdate = void 0;
class WTRelatedItemsUpdate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemsUpdate.attributeTypeMap);
    }
}
exports.WTRelatedItemsUpdate = WTRelatedItemsUpdate;
WTRelatedItemsUpdate.discriminator = undefined;
WTRelatedItemsUpdate.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "any"
    }
];
//# sourceMappingURL=wTRelatedItemsUpdate.js.map