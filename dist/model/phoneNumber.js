"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
class PhoneNumber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PhoneNumber.attributeTypeMap);
    }
}
exports.PhoneNumber = PhoneNumber;
PhoneNumber.discriminator = undefined;
PhoneNumber.attributeTypeMap = [
    {
        "name": "messageFooter",
        "baseName": "messageFooter",
        "type": "any"
    },
    {
        "name": "helpResponse",
        "baseName": "helpResponse",
        "type": "any"
    },
    {
        "name": "stopResponse",
        "baseName": "stopResponse",
        "type": "any"
    },
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
        "name": "watsonConversationWorkplaceID",
        "baseName": "watsonConversationWorkplaceID",
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
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "isShortCode",
        "baseName": "isShortCode",
        "type": "any"
    },
    {
        "name": "twilioSID",
        "baseName": "twilioSID",
        "type": "any"
    },
    {
        "name": "twilioAccountSID",
        "baseName": "twilioAccountSID",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
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
        "name": "isApproved",
        "baseName": "isApproved",
        "type": "any"
    }
];
//# sourceMappingURL=phoneNumber.js.map