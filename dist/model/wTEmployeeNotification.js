"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeNotification {
    static getAttributeTypeMap() {
        return WTEmployeeNotification.attributeTypeMap;
    }
}
WTEmployeeNotification.discriminator = undefined;
WTEmployeeNotification.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "WTEmployeeNotificationType"
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
exports.WTEmployeeNotification = WTEmployeeNotification;
//# sourceMappingURL=wTEmployeeNotification.js.map