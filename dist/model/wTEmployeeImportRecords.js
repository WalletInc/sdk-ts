"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeImportRecords = void 0;
class WTEmployeeImportRecords extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeImportRecords.attributeTypeMap);
    }
}
exports.WTEmployeeImportRecords = WTEmployeeImportRecords;
WTEmployeeImportRecords.discriminator = undefined;
WTEmployeeImportRecords.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeImportRecords.js.map