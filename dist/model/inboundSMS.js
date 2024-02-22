"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InboundSMS {
    static getAttributeTypeMap() {
        return InboundSMS.attributeTypeMap;
    }
}
InboundSMS.discriminator = undefined;
InboundSMS.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
    },
    {
        "name": "automatedReply",
        "baseName": "automatedReply",
        "type": "string"
    },
    {
        "name": "automatedReplyAdditionalInfo",
        "baseName": "automatedReplyAdditionalInfo",
        "type": "string"
    },
    {
        "name": "smsSid",
        "baseName": "smsSid",
        "type": "string"
    },
    {
        "name": "smsMessageSid",
        "baseName": "smsMessageSid",
        "type": "string"
    },
    {
        "name": "smsStatus",
        "baseName": "smsStatus",
        "type": "string"
    },
    {
        "name": "messagingServiceSid",
        "baseName": "messagingServiceSid",
        "type": "string"
    },
    {
        "name": "accountSid",
        "baseName": "accountSid",
        "type": "string"
    },
    {
        "name": "messageSid",
        "baseName": "messageSid",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "numSegments",
        "baseName": "numSegments",
        "type": "number"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "string"
    },
    {
        "name": "toCity",
        "baseName": "toCity",
        "type": "string"
    },
    {
        "name": "toState",
        "baseName": "toState",
        "type": "string"
    },
    {
        "name": "toZip",
        "baseName": "toZip",
        "type": "string"
    },
    {
        "name": "toCountry",
        "baseName": "toCountry",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "fromCity",
        "baseName": "fromCity",
        "type": "string"
    },
    {
        "name": "fromState",
        "baseName": "fromState",
        "type": "string"
    },
    {
        "name": "fromZip",
        "baseName": "fromZip",
        "type": "string"
    },
    {
        "name": "fromCountry",
        "baseName": "fromCountry",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "watsonIntent",
        "baseName": "watsonIntent",
        "type": "string"
    },
    {
        "name": "watsonIntents",
        "baseName": "watsonIntents",
        "type": "string"
    },
    {
        "name": "watsonContext",
        "baseName": "watsonContext",
        "type": "string"
    },
    {
        "name": "watsonContexts",
        "baseName": "watsonContexts",
        "type": "string"
    },
    {
        "name": "numMedia",
        "baseName": "numMedia",
        "type": "number"
    },
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "isOptIn",
        "baseName": "isOptIn",
        "type": "boolean"
    },
    {
        "name": "isHelpDeskRequest",
        "baseName": "isHelpDeskRequest",
        "type": "boolean"
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
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "bodyLowercase",
        "baseName": "bodyLowercase",
        "type": "string"
    },
    {
        "name": "fromLocalized",
        "baseName": "fromLocalized",
        "type": "string"
    }
];
exports.InboundSMS = InboundSMS;
//# sourceMappingURL=inboundSMS.js.map