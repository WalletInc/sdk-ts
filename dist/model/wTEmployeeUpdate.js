"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeUpdate = void 0;
class WTEmployeeUpdate {
    static getAttributeTypeMap() {
        return WTEmployeeUpdate.attributeTypeMap;
    }
}
exports.WTEmployeeUpdate = WTEmployeeUpdate;
WTEmployeeUpdate.discriminator = undefined;
WTEmployeeUpdate.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeUpdate.js.map