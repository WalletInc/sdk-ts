/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTPosMachineCreateParams {
    'registerID': string;
    'registerName': string;
    'outletName': string;
    /**
    * Stores the outlet number
    */
    'outletNumber': number;
    'profitCenter': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "registerID",
            "baseName": "registerID",
            "type": "string"
        },
        {
            "name": "registerName",
            "baseName": "registerName",
            "type": "string"
        },
        {
            "name": "outletName",
            "baseName": "outletName",
            "type": "string"
        },
        {
            "name": "outletNumber",
            "baseName": "outletNumber",
            "type": "number"
        },
        {
            "name": "profitCenter",
            "baseName": "profitCenter",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTPosMachineCreateParams.attributeTypeMap;
    }
}

