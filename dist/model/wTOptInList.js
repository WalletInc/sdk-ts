"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTOptInList {
    static getAttributeTypeMap() {
        return WTOptInList.attributeTypeMap;
    }
}
WTOptInList.discriminator = undefined;
WTOptInList.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "listName",
        "baseName": "listName",
        "type": "string"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "estimatedMessagesPerMonth",
        "baseName": "estimatedMessagesPerMonth",
        "type": "number"
    },
    {
        "name": "optInKeyword",
        "baseName": "optInKeyword",
        "type": "string"
    },
    {
        "name": "optOutKeyword",
        "baseName": "optOutKeyword",
        "type": "string"
    },
    {
        "name": "optInConfirmedResponse",
        "baseName": "optInConfirmedResponse",
        "type": "string"
    },
    {
        "name": "optOutConfirmedResponse",
        "baseName": "optOutConfirmedResponse",
        "type": "string"
    },
    {
        "name": "optInConfirmedCustomerReceives",
        "baseName": "optInConfirmedCustomerReceives",
        "type": "string"
    },
    {
        "name": "optOutConfirmedCustomerReceives",
        "baseName": "optOutConfirmedCustomerReceives",
        "type": "string"
    },
    {
        "name": "optInConfirmedMediaURLs",
        "baseName": "optInConfirmedMediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "optOutConfirmedMediaURLs",
        "baseName": "optOutConfirmedMediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "isOver21Required",
        "baseName": "isOver21Required",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
    }
];
exports.WTOptInList = WTOptInList;
//# sourceMappingURL=wTOptInList.js.map