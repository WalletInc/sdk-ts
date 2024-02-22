"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail = void 0;
class PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail {
    static getAttributeTypeMap() {
        return PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail.attributeTypeMap;
    }
}
exports.PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail = PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail;
PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail.discriminator = undefined;
PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "isPublicRepresentative",
        "baseName": "isPublicRepresentative",
        "type": "boolean"
    },
    {
        "name": "walletSequenceNumber",
        "baseName": "walletSequenceNumber",
        "type": "number"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "string"
    },
    {
        "name": "scheduleStartDay",
        "baseName": "scheduleStartDay",
        "type": "EmployeeScheduleStartDay"
    },
    {
        "name": "scheduleStartHour",
        "baseName": "scheduleStartHour",
        "type": "EmployeeScheduleStartHour"
    },
    {
        "name": "scheduleStartMinute",
        "baseName": "scheduleStartMinute",
        "type": "EmployeeScheduleStartMinute"
    },
    {
        "name": "scheduleStartMeridiem",
        "baseName": "scheduleStartMeridiem",
        "type": "EmployeeScheduleStartMeridiem"
    },
    {
        "name": "scheduleEndDay",
        "baseName": "scheduleEndDay",
        "type": "EmployeeScheduleStartDay"
    },
    {
        "name": "scheduleEndHour",
        "baseName": "scheduleEndHour",
        "type": "EmployeeScheduleStartHour"
    },
    {
        "name": "scheduleEndMinute",
        "baseName": "scheduleEndMinute",
        "type": "EmployeeScheduleStartMinute"
    },
    {
        "name": "scheduleEndMeridiem",
        "baseName": "scheduleEndMeridiem",
        "type": "EmployeeScheduleStartMeridiem"
    }
];
//# sourceMappingURL=pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail.js.map