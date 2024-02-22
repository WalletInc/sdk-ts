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

export class PhoneNumberCapabilities {
    'fax': boolean;
    'voice': boolean;
    'sms': boolean;
    'mms': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fax",
            "baseName": "fax",
            "type": "boolean"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "boolean"
        },
        {
            "name": "sms",
            "baseName": "sms",
            "type": "boolean"
        },
        {
            "name": "mms",
            "baseName": "mms",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumberCapabilities.attributeTypeMap;
    }
}

