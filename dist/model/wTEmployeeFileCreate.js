"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeFileCreate = void 0;
class WTEmployeeFileCreate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeFileCreate.attributeTypeMap);
    }
}
exports.WTEmployeeFileCreate = WTEmployeeFileCreate;
WTEmployeeFileCreate.discriminator = undefined;
WTEmployeeFileCreate.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileData",
        "baseName": "fileData",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeFileCreate.js.map