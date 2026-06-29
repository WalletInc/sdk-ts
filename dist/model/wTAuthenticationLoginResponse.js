"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationLoginResponse = void 0;
class WTAuthenticationLoginResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationLoginResponse.attributeTypeMap);
    }
}
exports.WTAuthenticationLoginResponse = WTAuthenticationLoginResponse;
WTAuthenticationLoginResponse.discriminator = undefined;
WTAuthenticationLoginResponse.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "any"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "any"
    },
    {
        "name": "profilePictureURL",
        "baseName": "profilePictureURL",
        "type": "any"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "any"
    },
    {
        "name": "department",
        "baseName": "department",
        "type": "any"
    },
    {
        "name": "merchantName",
        "baseName": "merchantName",
        "type": "any"
    },
    {
        "name": "merchantCurrencyAbbreviation",
        "baseName": "merchantCurrencyAbbreviation",
        "type": "any"
    },
    {
        "name": "merchantIndustry",
        "baseName": "merchantIndustry",
        "type": "any"
    },
    {
        "name": "customDomain",
        "baseName": "customDomain",
        "type": "any"
    }
];
//# sourceMappingURL=wTAuthenticationLoginResponse.js.map