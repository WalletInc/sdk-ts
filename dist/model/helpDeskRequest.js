"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpDeskRequest = void 0;
class HelpDeskRequest {
    static getAttributeTypeMap() {
        return HelpDeskRequest.attributeTypeMap;
    }
}
exports.HelpDeskRequest = HelpDeskRequest;
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
//# sourceMappingURL=helpDeskRequest.js.map