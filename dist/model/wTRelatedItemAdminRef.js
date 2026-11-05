"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRelatedItemAdminRef = void 0;
class WTRelatedItemAdminRef extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRelatedItemAdminRef.attributeTypeMap);
    }
}
exports.WTRelatedItemAdminRef = WTRelatedItemAdminRef;
WTRelatedItemAdminRef.discriminator = undefined;
WTRelatedItemAdminRef.attributeTypeMap = [
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
        "name": "status",
        "baseName": "status",
        "type": "WTRelatedItemStatus"
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
    }
];
//# sourceMappingURL=wTRelatedItemAdminRef.js.map