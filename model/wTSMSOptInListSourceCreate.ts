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

export class WTSMSOptInListSourceCreate {
    'listID': string;
    'sourceName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listID",
            "baseName": "listID",
            "type": "string"
        },
        {
            "name": "sourceName",
            "baseName": "sourceName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTSMSOptInListSourceCreate.attributeTypeMap;
    }
}

