/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class InlineObject3 {
    'claimedByPhoneNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claimedByPhoneNumber",
            "baseName": "claimedByPhoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject3.attributeTypeMap;
    }
}

