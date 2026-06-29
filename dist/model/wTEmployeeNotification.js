"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeNotification = void 0;
class WTEmployeeNotification extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeNotification.attributeTypeMap);
    }
}
exports.WTEmployeeNotification = WTEmployeeNotification;
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
        "type": "any"
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeNotification.js.map