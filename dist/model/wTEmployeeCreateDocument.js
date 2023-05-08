"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateDocument = void 0;
class WTEmployeeCreateDocument {
    static getAttributeTypeMap() {
        return WTEmployeeCreateDocument.attributeTypeMap;
    }
}
WTEmployeeCreateDocument.discriminator = undefined;
WTEmployeeCreateDocument.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "fileData",
        "baseName": "fileData",
        "type": "any"
    },
    {
        "name": "folder",
        "baseName": "folder",
        "type": "string"
    }
];
exports.WTEmployeeCreateDocument = WTEmployeeCreateDocument;
//# sourceMappingURL=wTEmployeeCreateDocument.js.map