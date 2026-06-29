"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeUpdate = void 0;
class WTEmployeeUpdate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeUpdate.attributeTypeMap);
    }
}
exports.WTEmployeeUpdate = WTEmployeeUpdate;
WTEmployeeUpdate.discriminator = undefined;
WTEmployeeUpdate.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "any"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "isPublicRepresentative",
        "baseName": "isPublicRepresentative",
        "type": "any"
    },
    {
        "name": "walletSequenceNumber",
        "baseName": "walletSequenceNumber",
        "type": "any"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "any"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "any"
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