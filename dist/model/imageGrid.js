"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGrid = void 0;
class ImageGrid extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageGrid.attributeTypeMap);
    }
}
exports.ImageGrid = ImageGrid;
ImageGrid.discriminator = undefined;
ImageGrid.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequenceNumber",
        "type": "any"
    },
    {
        "name": "isPinned",
        "baseName": "isPinned",
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
//# sourceMappingURL=imageGrid.js.map