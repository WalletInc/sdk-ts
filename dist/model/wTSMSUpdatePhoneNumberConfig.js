"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSUpdatePhoneNumberConfig = void 0;
class WTSMSUpdatePhoneNumberConfig extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSMSUpdatePhoneNumberConfig.attributeTypeMap);
    }
}
exports.WTSMSUpdatePhoneNumberConfig = WTSMSUpdatePhoneNumberConfig;
WTSMSUpdatePhoneNumberConfig.discriminator = undefined;
WTSMSUpdatePhoneNumberConfig.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "any"
    },
    {
        "name": "privacyPolicyURL",
        "baseName": "privacyPolicyURL",
        "type": "any"
    },
    {
        "name": "termsOfServiceURL",
        "baseName": "termsOfServiceURL",
        "type": "any"
    },
    {
        "name": "messageFooter",
        "baseName": "messageFooter",
        "type": "any"
    },
    {
        "name": "stopResponse",
        "baseName": "stopResponse",
        "type": "any"
    },
    {
        "name": "helpResponse",
        "baseName": "helpResponse",
        "type": "any"
    },
    {
        "name": "helpDeskKeyword",
        "baseName": "helpDeskKeyword",
        "type": "any"
    },
    {
        "name": "helpDeskQueueResponse",
        "baseName": "helpDeskQueueResponse",
        "type": "any"
    },
    {
        "name": "isConnectedToWatson",
        "baseName": "isConnectedToWatson",
        "type": "any"
    },
    {
        "name": "watsonUsername",
        "baseName": "watsonUsername",
        "type": "any"
    },
    {
        "name": "watsonPassword",
        "baseName": "watsonPassword",
        "type": "any"
    },
    {
        "name": "watsonConversationWorkplaceID",
        "baseName": "watsonConversationWorkplaceID",
        "type": "any"
    }
];
//# sourceMappingURL=wTSMSUpdatePhoneNumberConfig.js.map