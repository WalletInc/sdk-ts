"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundSMS = void 0;
class OutboundSMS extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OutboundSMS.attributeTypeMap);
    }
}
exports.OutboundSMS = OutboundSMS;
OutboundSMS.discriminator = undefined;
OutboundSMS.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "OutboundSMSStatus"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "paymentObjectBroadcastID",
        "baseName": "paymentObjectBroadcastID",
        "type": "OutboundSMSPaymentObjectBroadcastID"
    },
    {
        "name": "bodyTemplate",
        "baseName": "bodyTemplate",
        "type": "any"
    },
    {
        "name": "statusCallback",
        "baseName": "statusCallback",
        "type": "any"
    },
    {
        "name": "isSent",
        "baseName": "isSent",
        "type": "any"
    },
    {
        "name": "sentAt",
        "baseName": "sentAt",
        "type": "any"
    },
    {
        "name": "deliveredAt",
        "baseName": "deliveredAt",
        "type": "any"
    },
    {
        "name": "messageSid",
        "baseName": "messageSid",
        "type": "any"
    },
    {
        "name": "numSegments",
        "baseName": "numSegments",
        "type": "any"
    },
    {
        "name": "numMedia",
        "baseName": "numMedia",
        "type": "any"
    },
    {
        "name": "errorCode",
        "baseName": "errorCode",
        "type": "any"
    },
    {
        "name": "errorMessage",
        "baseName": "errorMessage",
        "type": "any"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "any"
    }
];
//# sourceMappingURL=outboundSMS.js.map