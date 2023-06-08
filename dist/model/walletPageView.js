"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletPageView = void 0;
class WalletPageView {
    static getAttributeTypeMap() {
        return WalletPageView.attributeTypeMap;
    }
}
WalletPageView.discriminator = undefined;
WalletPageView.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "walletObjectID",
        "baseName": "walletObjectID",
        "type": "string"
    },
    {
        "name": "walletObjectPrefix",
        "baseName": "walletObjectPrefix",
        "type": "string"
    },
    {
        "name": "parentObjectID",
        "baseName": "parentObjectID",
        "type": "string"
    },
    {
        "name": "parentObjectPrefix",
        "baseName": "parentObjectPrefix",
        "type": "string"
    },
    {
        "name": "sessionID",
        "baseName": "sessionID",
        "type": "string"
    },
    {
        "name": "navigatorAgent",
        "baseName": "navigatorAgent",
        "type": "string"
    },
    {
        "name": "browserName",
        "baseName": "browserName",
        "type": "string"
    },
    {
        "name": "browserVersion",
        "baseName": "browserVersion",
        "type": "string"
    },
    {
        "name": "engineName",
        "baseName": "engineName",
        "type": "string"
    },
    {
        "name": "engineVersion",
        "baseName": "engineVersion",
        "type": "string"
    },
    {
        "name": "oSName",
        "baseName": "oSName",
        "type": "string"
    },
    {
        "name": "oSVersion",
        "baseName": "oSVersion",
        "type": "string"
    },
    {
        "name": "isMobile",
        "baseName": "isMobile",
        "type": "boolean"
    },
    {
        "name": "deviceVendor",
        "baseName": "deviceVendor",
        "type": "string"
    },
    {
        "name": "deviceModel",
        "baseName": "deviceModel",
        "type": "string"
    },
    {
        "name": "deviceType",
        "baseName": "deviceType",
        "type": "string"
    },
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "regionName",
        "baseName": "regionName",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "string"
    },
    {
        "name": "latitude",
        "baseName": "latitude",
        "type": "number"
    },
    {
        "name": "longitude",
        "baseName": "longitude",
        "type": "number"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    },
    {
        "name": "isp",
        "baseName": "isp",
        "type": "string"
    },
    {
        "name": "org",
        "baseName": "org",
        "type": "string"
    },
    {
        "name": "asn",
        "baseName": "asn",
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
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "geoPoint",
        "baseName": "geoPoint",
        "type": "WTWalletPageViewGeoPoint"
    }
];
exports.WalletPageView = WalletPageView;
//# sourceMappingURL=walletPageView.js.map