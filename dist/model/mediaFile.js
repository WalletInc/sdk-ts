"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFile = void 0;
class MediaFile extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MediaFile.attributeTypeMap);
    }
}
exports.MediaFile = MediaFile;
MediaFile.discriminator = undefined;
MediaFile.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
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
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "fileURL",
        "baseName": "fileURL",
        "type": "any"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "any"
    },
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileSize",
        "baseName": "fileSize",
        "type": "any"
    },
    {
        "name": "folder",
        "baseName": "folder",
        "type": "any"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    }
];
//# sourceMappingURL=mediaFile.js.map