"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateMediaFile = void 0;
class WTEmployeeCreateMediaFile extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeCreateMediaFile.attributeTypeMap);
    }
}
exports.WTEmployeeCreateMediaFile = WTEmployeeCreateMediaFile;
WTEmployeeCreateMediaFile.discriminator = undefined;
WTEmployeeCreateMediaFile.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeCreateMediaFile.js.map