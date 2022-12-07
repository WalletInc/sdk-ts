/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.527
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class InlineResponse20010 {
    'currencyAbbreviation': string;
    'phoneCode': string;
    'iso2': string;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currencyAbbreviation",
            "baseName": "currency_abbreviation",
            "type": "string"
        },
        {
            "name": "phoneCode",
            "baseName": "phone_code",
            "type": "string"
        },
        {
            "name": "iso2",
            "baseName": "iso2",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }
}

