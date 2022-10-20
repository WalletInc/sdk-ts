/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.514
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WTWalletPageViewGeoPoint } from './wTWalletPageViewGeoPoint';

export class WalletPageView {
    'ip': string;
    'walletObjectID': string;
    'walletObjectPrefix': string;
    'parentObjectID': string;
    'parentObjectPrefix': string;
    'sessionID': string;
    'navigatorAgent': string;
    'browserName': string;
    'browserVersion': string;
    'engineName': string;
    'engineVersion': string;
    'oSName': string;
    'oSVersion': string;
    'isMobile': boolean;
    'deviceVendor': string;
    'deviceModel': string;
    'deviceType': string;
    'phoneVerificationToken': string;
    'id': string | null;
    'status': string;
    'country': string;
    'countryCode': string;
    'region': string;
    'regionName': string;
    'city': string;
    'zip': string;
    'latitude': number;
    'longitude': number;
    'timezone': string;
    'isp': string;
    'org': string;
    'asn': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;
    'geoPoint': WTWalletPageViewGeoPoint;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return WalletPageView.attributeTypeMap;
    }
}

