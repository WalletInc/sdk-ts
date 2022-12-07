"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeNotification = void 0;
class WTEmployeeNotification {
    static getAttributeTypeMap() {
        return WTEmployeeNotification.attributeTypeMap;
    }
}
exports.WTEmployeeNotification = WTEmployeeNotification;
WTEmployeeNotification.discriminator = undefined;
WTEmployeeNotification.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeNotification.js.map