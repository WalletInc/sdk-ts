/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.533
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTTCPAOpt {
    'listID': string | null;
    'sourceID': string | null;
    'phoneNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listID",
            "baseName": "listID",
            "type": "string"
        },
        {
            "name": "sourceID",
            "baseName": "sourceID",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTTCPAOpt.attributeTypeMap;
    }
}

