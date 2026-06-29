"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateDocument = void 0;
class WTEmployeeCreateDocument extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeCreateDocument.attributeTypeMap);
    }
}
exports.WTEmployeeCreateDocument = WTEmployeeCreateDocument;
WTEmployeeCreateDocument.discriminator = undefined;
WTEmployeeCreateDocument.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileData",
        "baseName": "fileData",
        "type": "any"
    },
    {
        "name": "folder",
        "baseName": "folder",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeCreateDocument.js.map