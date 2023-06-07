"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeCreate = void 0;
class WTEmployeeCreate {
    static getAttributeTypeMap() {
        return WTEmployeeCreate.attributeTypeMap;
    }
}
WTEmployeeCreate.discriminator = undefined;
WTEmployeeCreate.attributeTypeMap = [
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
        "type": "string"
    },
    {
        "name": "scheduleStartHour",
        "baseName": "scheduleStartHour",
        "type": "number"
    },
    {
        "name": "scheduleStartMinute",
        "baseName": "scheduleStartMinute",
        "type": "number"
    },
    {
        "name": "scheduleStartMeridiem",
        "baseName": "scheduleStartMeridiem",
        "type": "string"
    },
    {
        "name": "scheduleEndDay",
        "baseName": "scheduleEndDay",
        "type": "string"
    },
    {
        "name": "scheduleEndHour",
        "baseName": "scheduleEndHour",
        "type": "number"
    },
    {
        "name": "scheduleEndMinute",
        "baseName": "scheduleEndMinute",
        "type": "number"
    },
    {
        "name": "scheduleEndMeridiem",
        "baseName": "scheduleEndMeridiem",
        "type": "string"
    }
];
exports.WTEmployeeCreate = WTEmployeeCreate;
//# sourceMappingURL=wTEmployeeCreate.js.map