"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeScheduleSimpleSMSToRecipient {
    static getAttributeTypeMap() {
        return WTEmployeeScheduleSimpleSMSToRecipient.attributeTypeMap;
    }
}
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
exports.WTEmployeeScheduleSimpleSMSToRecipient = WTEmployeeScheduleSimpleSMSToRecipient;
//# sourceMappingURL=wTEmployeeScheduleSimpleSMSToRecipient.js.map