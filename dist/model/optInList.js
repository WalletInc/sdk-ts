"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptInList = void 0;
class OptInList extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OptInList.attributeTypeMap);
    }
}
exports.OptInList = OptInList;
OptInList.discriminator = undefined;
OptInList.attributeTypeMap = [
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
        "type": "any"
    },
    {
        "name": "optOutConfirmedMediaURLs",
        "baseName": "optOutConfirmedMediaURLs",
        "type": "any"
    },
    {
        "name": "isOver21Required",
        "baseName": "isOver21Required",
        "type": "boolean"
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
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    }
];
//# sourceMappingURL=optInList.js.map