"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}
Employee.discriminator = undefined;
Employee.attributeTypeMap = [
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
        "name": "email",
        "baseName": "email",
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
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "emailVerified",
        "baseName": "emailVerified",
        "type": "string"
    },
    {
        "name": "profilePictureURL",
        "baseName": "profilePictureURL",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "sessionToken",
        "baseName": "sessionToken",
        "type": "string"
    },
    {
        "name": "failedLoginAttempts",
        "baseName": "failedLoginAttempts",
        "type": "number"
    },
    {
        "name": "lastLoginDate",
        "baseName": "lastLoginDate",
        "type": "Date"
    },
    {
        "name": "cfuvid",
        "baseName": "cfuvid",
        "type": "string"
    },
    {
        "name": "schedule",
        "baseName": "schedule",
        "type": "object"
    },
    {
        "name": "isEmailNotificationDisabled",
        "baseName": "isEmailNotificationDisabled",
        "type": "boolean"
    }
];
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map