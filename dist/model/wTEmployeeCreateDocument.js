"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateDocument = void 0;
class WTEmployeeCreateDocument {
    static getAttributeTypeMap() {
        return WTEmployeeCreateDocument.attributeTypeMap;
    }
}
exports.WTEmployeeCreateDocument = WTEmployeeCreateDocument;
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
//# sourceMappingURL=wTEmployeeCreateDocument.js.map