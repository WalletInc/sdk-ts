"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeUpdateRecords = void 0;
class WTEmployeeUpdateRecords {
    static getAttributeTypeMap() {
        return WTEmployeeUpdateRecords.attributeTypeMap;
    }
}
WTEmployeeUpdateRecords.discriminator = undefined;
WTEmployeeUpdateRecords.attributeTypeMap = [
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
exports.WTEmployeeUpdateRecords = WTEmployeeUpdateRecords;
//# sourceMappingURL=wTEmployeeUpdateRecords.js.map