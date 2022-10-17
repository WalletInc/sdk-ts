"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundSMS = void 0;
class OutboundSMS {
    static getAttributeTypeMap() {
        return OutboundSMS.attributeTypeMap;
    }
}
exports.OutboundSMS = OutboundSMS;
OutboundSMS.discriminator = undefined;
OutboundSMS.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
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
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "paymentObjectBroadcastID",
        "baseName": "paymentObjectBroadcastID",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "bodyTemplate",
        "baseName": "bodyTemplate",
        "type": "string"
    },
    {
        "name": "statusCallback",
        "baseName": "statusCallback",
        "type": "string"
    },
    {
        "name": "isSent",
        "baseName": "isSent",
        "type": "boolean"
    },
    {
        "name": "sentAt",
        "baseName": "sentAt",
        "type": "Date"
    },
    {
        "name": "deliveredAt",
        "baseName": "deliveredAt",
        "type": "Date"
    },
    {
        "name": "messageSid",
        "baseName": "messageSid",
        "type": "string"
    },
    {
        "name": "numSegments",
        "baseName": "numSegments",
        "type": "number"
    },
    {
        "name": "numMedia",
        "baseName": "numMedia",
        "type": "number"
    },
    {
        "name": "errorCode",
        "baseName": "errorCode",
        "type": "string"
    },
    {
        "name": "errorMessage",
        "baseName": "errorMessage",
        "type": "string"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "string"
    }
];
//# sourceMappingURL=outboundSMS.js.map