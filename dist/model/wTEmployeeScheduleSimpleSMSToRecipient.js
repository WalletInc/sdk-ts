"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeScheduleSimpleSMSToRecipient = void 0;
class WTEmployeeScheduleSimpleSMSToRecipient {
    static getAttributeTypeMap() {
        return WTEmployeeScheduleSimpleSMSToRecipient.attributeTypeMap;
    }
}
exports.WTEmployeeScheduleSimpleSMSToRecipient = WTEmployeeScheduleSimpleSMSToRecipient;
WTEmployeeScheduleSimpleSMSToRecipient.discriminator = undefined;
WTEmployeeScheduleSimpleSMSToRecipient.attributeTypeMap = [
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
        "name": "toCellPhone",
        "baseName": "toCellPhone",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeScheduleSimpleSMSToRecipient.js.map