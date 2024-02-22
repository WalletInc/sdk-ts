"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeCreateMediaFile {
    static getAttributeTypeMap() {
        return WTEmployeeCreateMediaFile.attributeTypeMap;
    }
}
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
exports.WTEmployeeCreateMediaFile = WTEmployeeCreateMediaFile;
//# sourceMappingURL=wTEmployeeCreateMediaFile.js.map