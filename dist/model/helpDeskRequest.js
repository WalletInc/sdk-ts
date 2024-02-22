"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpDeskRequest {
    static getAttributeTypeMap() {
        return HelpDeskRequest.attributeTypeMap;
    }
}
HelpDeskRequest.discriminator = undefined;
HelpDeskRequest.attributeTypeMap = [
    {
        "name": "merchantPhoneNumberID",
        "baseName": "merchantPhoneNumberID",
        "type": "string"
    },
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "string"
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
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isResolved",
        "baseName": "isResolved",
        "type": "boolean"
    },
    {
        "name": "resolvedAt",
        "baseName": "resolvedAt",
        "type": "Date"
    }
];
exports.HelpDeskRequest = HelpDeskRequest;
//# sourceMappingURL=helpDeskRequest.js.map