"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeScheduleSimpleSMS = void 0;
class WTEmployeeScheduleSimpleSMS {
    static getAttributeTypeMap() {
        return WTEmployeeScheduleSimpleSMS.attributeTypeMap;
    }
}
exports.WTEmployeeScheduleSimpleSMS = WTEmployeeScheduleSimpleSMS;
WTEmployeeScheduleSimpleSMS.discriminator = undefined;
WTEmployeeScheduleSimpleSMS.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "messageTemplate",
        "baseName": "messageTemplate",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "Date"
    },
    {
        "name": "listType",
        "baseName": "listType",
        "type": "string"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeScheduleSimpleSMS.js.map