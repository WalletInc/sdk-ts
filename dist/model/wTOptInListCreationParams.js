"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOptInListCreationParams = void 0;
class WTOptInListCreationParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOptInListCreationParams.attributeTypeMap);
    }
}
exports.WTOptInListCreationParams = WTOptInListCreationParams;
WTOptInListCreationParams.discriminator = undefined;
WTOptInListCreationParams.attributeTypeMap = [
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "listName",
        "baseName": "listName",
        "type": "any"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "estimatedMessagesPerMonth",
        "baseName": "estimatedMessagesPerMonth",
        "type": "any"
    },
    {
        "name": "optInKeyword",
        "baseName": "optInKeyword",
        "type": "any"
    },
    {
        "name": "optOutKeyword",
        "baseName": "optOutKeyword",
        "type": "any"
    },
    {
        "name": "optInConfirmedResponse",
        "baseName": "optInConfirmedResponse",
        "type": "any"
    },
    {
        "name": "optOutConfirmedResponse",
        "baseName": "optOutConfirmedResponse",
        "type": "any"
    },
    {
        "name": "optInConfirmedCustomerReceives",
        "baseName": "optInConfirmedCustomerReceives",
        "type": "any"
    },
    {
        "name": "optOutConfirmedCustomerReceives",
        "baseName": "optOutConfirmedCustomerReceives",
        "type": "any"
    },
    {
        "name": "isOver21Required",
        "baseName": "isOver21Required",
        "type": "any"
    },
    {
        "name": "optInConfirmedMediaURLs",
        "baseName": "optInConfirmedMediaURLs",
        "type": "any"
    },
    {
        "name": "optOutConfirmedMediaURLs",
        "baseName": "optOutConfirmedMediaURLs",
        "type": "any"
    }
];
//# sourceMappingURL=wTOptInListCreationParams.js.map