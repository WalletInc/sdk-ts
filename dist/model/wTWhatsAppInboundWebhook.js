"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWhatsAppInboundWebhook = void 0;
class WTWhatsAppInboundWebhook extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWhatsAppInboundWebhook.attributeTypeMap);
    }
}
exports.WTWhatsAppInboundWebhook = WTWhatsAppInboundWebhook;
WTWhatsAppInboundWebhook.discriminator = undefined;
WTWhatsAppInboundWebhook.attributeTypeMap = [
    {
        "name": "smsMessageSid",
        "baseName": "SmsMessageSid",
        "type": "string"
    },
    {
        "name": "numMedia",
        "baseName": "NumMedia",
        "type": "any"
    },
    {
        "name": "profileName",
        "baseName": "ProfileName",
        "type": "string"
    },
    {
        "name": "smsSid",
        "baseName": "SmsSid",
        "type": "string"
    },
    {
        "name": "waId",
        "baseName": "WaId",
        "type": "string"
    },
    {
        "name": "smsStatus",
        "baseName": "SmsStatus",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "Body",
        "type": "string"
    },
    {
        "name": "to",
        "baseName": "To",
        "type": "string"
    },
    {
        "name": "numSegments",
        "baseName": "NumSegments",
        "type": "any"
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
        "name": "mediaUrls",
        "baseName": "MediaUrls",
        "type": "string"
    }
];
//# sourceMappingURL=wTWhatsAppInboundWebhook.js.map