"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeScheduleSimpleSMS = void 0;
class WTEmployeeScheduleSimpleSMS extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeScheduleSimpleSMS.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "any"
    },
    {
        "name": "listType",
        "baseName": "listType",
        "type": "WTEmployeeScheduleSimpleSMSListType"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeScheduleSimpleSMS.js.map