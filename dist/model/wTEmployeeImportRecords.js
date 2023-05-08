"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeImportRecords = void 0;
class WTEmployeeImportRecords {
    static getAttributeTypeMap() {
        return WTEmployeeImportRecords.attributeTypeMap;
    }
}
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
exports.WTEmployeeImportRecords = WTEmployeeImportRecords;
//# sourceMappingURL=wTEmployeeImportRecords.js.map