"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeImportRecords = void 0;
class WTEmployeeImportRecords {
    static getAttributeTypeMap() {
        return WTEmployeeImportRecords.attributeTypeMap;
    }
}
exports.WTEmployeeImportRecords = WTEmployeeImportRecords;
WTEmployeeImportRecords.discriminator = undefined;
WTEmployeeImportRecords.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeImportRecords.js.map