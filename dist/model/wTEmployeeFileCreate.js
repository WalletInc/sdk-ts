"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeFileCreate = void 0;
class WTEmployeeFileCreate {
    static getAttributeTypeMap() {
        return WTEmployeeFileCreate.attributeTypeMap;
    }
}
WTEmployeeFileCreate.discriminator = undefined;
WTEmployeeFileCreate.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "fileData",
        "baseName": "fileData",
        "type": "string"
    }
];
exports.WTEmployeeFileCreate = WTEmployeeFileCreate;
//# sourceMappingURL=wTEmployeeFileCreate.js.map