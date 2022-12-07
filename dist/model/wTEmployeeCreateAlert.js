"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreateAlert = void 0;
class WTEmployeeCreateAlert {
    static getAttributeTypeMap() {
        return WTEmployeeCreateAlert.attributeTypeMap;
    }
}
exports.WTEmployeeCreateAlert = WTEmployeeCreateAlert;
WTEmployeeCreateAlert.discriminator = undefined;
WTEmployeeCreateAlert.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeCreateAlert.js.map