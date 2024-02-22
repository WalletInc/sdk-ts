"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTLocalInstance {
    static getAttributeTypeMap() {
        return WTLocalInstance.attributeTypeMap;
    }
}
WTLocalInstance.discriminator = undefined;
WTLocalInstance.attributeTypeMap = [
    {
        "name": "capabilities",
        "baseName": "capabilities",
        "type": "PhoneNumberCapabilities"
    },
    {
        "name": "beta",
        "baseName": "beta",
        "type": "boolean"
    },
    {
        "name": "addressRequirements",
        "baseName": "addressRequirements",
        "type": "string"
    },
    {
        "name": "isoCountry",
        "baseName": "isoCountry",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postalCode",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "longitude",
        "baseName": "longitude",
        "type": "number"
    },
    {
        "name": "latitude",
        "baseName": "latitude",
        "type": "number"
    },
    {
        "name": "rateCenter",
        "baseName": "rateCenter",
        "type": "string"
    },
    {
        "name": "locality",
        "baseName": "locality",
        "type": "string"
    },
    {
        "name": "lata",
        "baseName": "lata",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "friendlyName",
        "baseName": "friendlyName",
        "type": "string"
    }
];
exports.WTLocalInstance = WTLocalInstance;
//# sourceMappingURL=wTLocalInstance.js.map