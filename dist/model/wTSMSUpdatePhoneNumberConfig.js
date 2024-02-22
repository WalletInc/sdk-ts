"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTSMSUpdatePhoneNumberConfig {
    static getAttributeTypeMap() {
        return WTSMSUpdatePhoneNumberConfig.attributeTypeMap;
    }
}
WTSMSUpdatePhoneNumberConfig.discriminator = undefined;
WTSMSUpdatePhoneNumberConfig.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "privacyPolicyURL",
        "baseName": "privacyPolicyURL",
        "type": "string"
    },
    {
        "name": "termsOfServiceURL",
        "baseName": "termsOfServiceURL",
        "type": "string"
    },
    {
        "name": "messageFooter",
        "baseName": "messageFooter",
        "type": "string"
    },
    {
        "name": "stopResponse",
        "baseName": "stopResponse",
        "type": "string"
    },
    {
        "name": "helpResponse",
        "baseName": "helpResponse",
        "type": "string"
    },
    {
        "name": "helpDeskKeyword",
        "baseName": "helpDeskKeyword",
        "type": "string"
    },
    {
        "name": "helpDeskQueueResponse",
        "baseName": "helpDeskQueueResponse",
        "type": "string"
    },
    {
        "name": "isConnectedToWatson",
        "baseName": "isConnectedToWatson",
        "type": "boolean"
    },
    {
        "name": "watsonUsername",
        "baseName": "watsonUsername",
        "type": "string"
    },
    {
        "name": "watsonPassword",
        "baseName": "watsonPassword",
        "type": "string"
    },
    {
        "name": "watsonConversationWorkplaceID",
        "baseName": "watsonConversationWorkplaceID",
        "type": "string"
    }
];
exports.WTSMSUpdatePhoneNumberConfig = WTSMSUpdatePhoneNumberConfig;
//# sourceMappingURL=wTSMSUpdatePhoneNumberConfig.js.map