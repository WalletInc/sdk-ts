/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTWalletPageViewGeoPoint {
    'longitude': number;
    'latitude': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WTWalletPageViewGeoPoint.attributeTypeMap;
    }
}

