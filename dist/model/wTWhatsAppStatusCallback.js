"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWhatsAppStatusCallback = void 0;
class WTWhatsAppStatusCallback extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWhatsAppStatusCallback.attributeTypeMap);
    }
}
exports.WTWhatsAppStatusCallback = WTWhatsAppStatusCallback;
WTWhatsAppStatusCallback.discriminator = undefined;
WTWhatsAppStatusCallback.attributeTypeMap = [
    {
        "name": "smsSid",
        "baseName": "SmsSid",
        "type": "string"
    },
    {
        "name": "smsStatus",
        "baseName": "SmsStatus",
        "type": "string"
    },
    {
        "name": "messageStatus",
        "baseName": "MessageStatus",
        "type": "string"
    },
    {
        "name": "to",
        "baseName": "To",
        "type": "string"
    },
    {
        "name": "messageSid",
        "baseName": "MessageSid",
        "type": "string"
    },
    {
        "name": "accountSid",
        "baseName": "AccountSid",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "From",
        "type": "string"
    },
    {
        "name": "apiVersion",
        "baseName": "ApiVersion",
        "type": "string"
    },
    {
        "name": "numMedia",
        "baseName": "NumMedia",
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
    }
];
//# sourceMappingURL=wTWhatsAppStatusCallback.js.map