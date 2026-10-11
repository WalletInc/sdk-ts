"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMediaFile = void 0;
class WTMediaFile extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMediaFile.attributeTypeMap);
    }
}
exports.WTMediaFile = WTMediaFile;
WTMediaFile.discriminator = undefined;
WTMediaFile.attributeTypeMap = [
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
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTMediaFileStatus"
    }
];
//# sourceMappingURL=wTMediaFile.js.map