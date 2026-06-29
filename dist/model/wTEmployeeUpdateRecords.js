"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeUpdateRecords = void 0;
class WTEmployeeUpdateRecords extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeUpdateRecords.attributeTypeMap);
    }
}
exports.WTEmployeeUpdateRecords = WTEmployeeUpdateRecords;
WTEmployeeUpdateRecords.discriminator = undefined;
WTEmployeeUpdateRecords.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeUpdateRecords.js.map