"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundSMS = void 0;
class InboundSMS extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InboundSMS.attributeTypeMap);
    }
}
exports.InboundSMS = InboundSMS;
InboundSMS.discriminator = undefined;
InboundSMS.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "automatedReply",
        "baseName": "automatedReply",
        "type": "any"
    },
    {
        "name": "automatedReplyAdditionalInfo",
        "baseName": "automatedReplyAdditionalInfo",
        "type": "any"
    },
    {
        "name": "smsSid",
        "baseName": "smsSid",
        "type": "any"
    },
    {
        "name": "smsMessageSid",
        "baseName": "smsMessageSid",
        "type": "any"
    },
    {
        "name": "smsStatus",
        "baseName": "smsStatus",
        "type": "any"
    },
    {
        "name": "messagingServiceSid",
        "baseName": "messagingServiceSid",
        "type": "any"
    },
    {
        "name": "accountSid",
        "baseName": "accountSid",
        "type": "any"
    },
    {
        "name": "messageSid",
        "baseName": "messageSid",
        "type": "any"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
    },
    {
        "name": "numSegments",
        "baseName": "numSegments",
        "type": "any"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "any"
    },
    {
        "name": "toCity",
        "baseName": "toCity",
        "type": "any"
    },
    {
        "name": "toState",
        "baseName": "toState",
        "type": "any"
    },
    {
        "name": "toZip",
        "baseName": "toZip",
        "type": "any"
    },
    {
        "name": "toCountry",
        "baseName": "toCountry",
        "type": "any"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "any"
    },
    {
        "name": "fromCity",
        "baseName": "fromCity",
        "type": "any"
    },
    {
        "name": "fromState",
        "baseName": "fromState",
        "type": "any"
    },
    {
        "name": "fromZip",
        "baseName": "fromZip",
        "type": "any"
    },
    {
        "name": "fromCountry",
        "baseName": "fromCountry",
        "type": "any"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "watsonIntent",
        "baseName": "watsonIntent",
        "type": "any"
    },
    {
        "name": "watsonIntents",
        "baseName": "watsonIntents",
        "type": "any"
    },
    {
        "name": "watsonContext",
        "baseName": "watsonContext",
        "type": "any"
    },
    {
        "name": "watsonContexts",
        "baseName": "watsonContexts",
        "type": "any"
    },
    {
        "name": "numMedia",
        "baseName": "numMedia",
        "type": "any"
    },
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "any"
    },
    {
        "name": "isOptIn",
        "baseName": "isOptIn",
        "type": "any"
    },
    {
        "name": "isHelpDeskRequest",
        "baseName": "isHelpDeskRequest",
        "type": "any"
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
        "name": "bodyLowercase",
        "baseName": "bodyLowercase",
        "type": "any"
    },
    {
        "name": "fromLocalized",
        "baseName": "fromLocalized",
        "type": "any"
    }
];
//# sourceMappingURL=inboundSMS.js.map