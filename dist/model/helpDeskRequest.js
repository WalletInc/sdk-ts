"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpDeskRequest = void 0;
class HelpDeskRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HelpDeskRequest.attributeTypeMap);
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
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isResolved",
        "baseName": "isResolved",
        "type": "any"
    },
    {
        "name": "resolvedAt",
        "baseName": "resolvedAt",
        "type": "any"
    }
];
//# sourceMappingURL=helpDeskRequest.js.map