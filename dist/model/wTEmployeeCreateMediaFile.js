"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateMediaFile = void 0;
class WTEmployeeCreateMediaFile {
    static getAttributeTypeMap() {
        return WTEmployeeCreateMediaFile.attributeTypeMap;
    }
}
exports.WTEmployeeCreateMediaFile = WTEmployeeCreateMediaFile;
WTEmployeeCreateMediaFile.discriminator = undefined;
WTEmployeeCreateMediaFile.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeCreateMediaFile.js.map