"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkBookSection = void 0;
class LinkBookSection {
    static getAttributeTypeMap() {
        return LinkBookSection.attributeTypeMap;
    }
}
LinkBookSection.discriminator = undefined;
LinkBookSection.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
exports.LinkBookSection = LinkBookSection;
//# sourceMappingURL=linkBookSection.js.map