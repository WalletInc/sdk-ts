"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkBookSection = void 0;
class LinkBookSection extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinkBookSection.attributeTypeMap);
    }
}
exports.LinkBookSection = LinkBookSection;
LinkBookSection.discriminator = undefined;
LinkBookSection.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=linkBookSection.js.map