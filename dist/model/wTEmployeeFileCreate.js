"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeFileCreate = void 0;
class WTEmployeeFileCreate {
    static getAttributeTypeMap() {
        return WTEmployeeFileCreate.attributeTypeMap;
    }
}
exports.WTEmployeeFileCreate = WTEmployeeFileCreate;
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
//# sourceMappingURL=wTEmployeeFileCreate.js.map