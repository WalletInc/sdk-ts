"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGrid = void 0;
class ImageGrid {
    static getAttributeTypeMap() {
        return ImageGrid.attributeTypeMap;
    }
}
ImageGrid.discriminator = undefined;
ImageGrid.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequenceNumber",
        "type": "number"
    },
    {
        "name": "isPinned",
        "baseName": "isPinned",
        "type": "boolean"
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
exports.ImageGrid = ImageGrid;
//# sourceMappingURL=imageGrid.js.map