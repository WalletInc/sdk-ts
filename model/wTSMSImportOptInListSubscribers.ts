/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTSMSImportOptInListSubscribers {
    'fileName': string;
    'bucket': string;
    'optInSourceID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string"
        },
        {
            "name": "optInSourceID",
            "baseName": "optInSourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTSMSImportOptInListSubscribers.attributeTypeMap;
    }
}

