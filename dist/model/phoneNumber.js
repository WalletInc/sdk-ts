"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
class PhoneNumber {
    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}
exports.PhoneNumber = PhoneNumber;
PhoneNumber.discriminator = undefined;
PhoneNumber.attributeTypeMap = [
    {
        "name": "messageFooter",
        "baseName": "messageFooter",
        "type": "string"
    },
    {
        "name": "helpResponse",
        "baseName": "helpResponse",
        "type": "string"
    },
    {
        "name": "stopResponse",
        "baseName": "stopResponse",
        "type": "string"
    },
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
        "name": "watsonConversationWorkplaceID",
        "baseName": "watsonConversationWorkplaceID",
        "type": "string"
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
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    },
    {
        "name": "isShortCode",
        "baseName": "isShortCode",
        "type": "boolean"
    },
    {
        "name": "twilioSID",
        "baseName": "twilioSID",
        "type": "string"
    },
    {
        "name": "twilioAccountSID",
        "baseName": "twilioAccountSID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
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
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "isApproved",
        "baseName": "isApproved",
        "type": "boolean"
    }
];
//# sourceMappingURL=phoneNumber.js.map