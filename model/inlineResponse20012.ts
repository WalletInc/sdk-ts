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

export class InlineResponse20012 {
    'entertainment': Array<any>;
    'grocery': Array<any>;
    'service': Array<any>;
    'casino': Array<any>;
    'hospitality': Array<any>;
    'food': Array<any>;
    'retail': Array<any>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entertainment",
            "baseName": "entertainment",
            "type": "Array<any>"
        },
        {
            "name": "grocery",
            "baseName": "grocery",
            "type": "Array<any>"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "Array<any>"
        },
        {
            "name": "casino",
            "baseName": "casino",
            "type": "Array<any>"
        },
        {
            "name": "hospitality",
            "baseName": "hospitality",
            "type": "Array<any>"
        },
        {
            "name": "food",
            "baseName": "food",
            "type": "Array<any>"
        },
        {
            "name": "retail",
            "baseName": "retail",
            "type": "Array<any>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20012.attributeTypeMap;
    }
}

