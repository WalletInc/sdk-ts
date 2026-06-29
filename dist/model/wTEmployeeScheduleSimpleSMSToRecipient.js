"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeScheduleSimpleSMSToRecipient = void 0;
class WTEmployeeScheduleSimpleSMSToRecipient extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeScheduleSimpleSMSToRecipient.attributeTypeMap);
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
        "name": "toCellPhone",
        "baseName": "toCellPhone",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeScheduleSimpleSMSToRecipient.js.map