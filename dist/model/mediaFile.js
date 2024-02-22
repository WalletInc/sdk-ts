"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFile = void 0;
class MediaFile {
    static getAttributeTypeMap() {
        return MediaFile.attributeTypeMap;
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
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "fileURL",
        "baseName": "fileURL",
        "type": "string"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "string"
    },
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "fileSize",
        "baseName": "fileSize",
        "type": "number"
    },
    {
        "name": "folder",
        "baseName": "folder",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    }
];
//# sourceMappingURL=mediaFile.js.map