"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
class Document {
    static getAttributeTypeMap() {
        return Document.attributeTypeMap;
    }
}
exports.Document = Document;
Document.discriminator = undefined;
Document.attributeTypeMap = [
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
//# sourceMappingURL=document.js.map