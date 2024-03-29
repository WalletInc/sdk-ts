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

export class AvailablePhoneNumbersRequest {
    /**
    * The area code within which an available number needs to be queried
    */
    'areaCode': number;
    /**
    * The number of available phone numbers to be returned in a single request
    */
    'limit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "areaCode",
            "baseName": "areaCode",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AvailablePhoneNumbersRequest.attributeTypeMap;
    }
}

