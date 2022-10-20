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

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID {
    'nickname': string;
    'destinationURL': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "destinationURL",
            "baseName": "destinationURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID.attributeTypeMap;
    }
}

