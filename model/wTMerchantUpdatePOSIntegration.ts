/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.521
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTMerchantUpdatePOSIntegration {
    'infoGenesisPropertyID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "infoGenesisPropertyID",
            "baseName": "infoGenesisPropertyID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTMerchantUpdatePOSIntegration.attributeTypeMap;
    }
}

