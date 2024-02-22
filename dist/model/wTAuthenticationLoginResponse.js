"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAuthenticationLoginResponse {
    static getAttributeTypeMap() {
        return WTAuthenticationLoginResponse.attributeTypeMap;
    }
}
WTAuthenticationLoginResponse.discriminator = undefined;
WTAuthenticationLoginResponse.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "profilePictureURL",
        "baseName": "profilePictureURL",
        "type": "string"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "string"
    },
    {
        "name": "merchantName",
        "baseName": "merchantName",
        "type": "string"
    },
    {
        "name": "merchantCurrencyAbbreviation",
        "baseName": "merchantCurrencyAbbreviation",
        "type": "string"
    },
    {
        "name": "merchantIndustry",
        "baseName": "merchantIndustry",
        "type": "string"
    },
    {
        "name": "customDomain",
        "baseName": "customDomain",
        "type": "string"
    }
];
exports.WTAuthenticationLoginResponse = WTAuthenticationLoginResponse;
//# sourceMappingURL=wTAuthenticationLoginResponse.js.map