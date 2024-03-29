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

export class WTInfoGenesisRecordFilterParameters {
    'startDateTime': Date;
    'endDateTime': Date;
    'selectedRegisters'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "Date"
        },
        {
            "name": "selectedRegisters",
            "baseName": "selectedRegisters",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WTInfoGenesisRecordFilterParameters.attributeTypeMap;
    }
}

