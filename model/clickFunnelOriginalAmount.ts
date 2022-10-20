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

export class ClickFunnelOriginalAmount {
    'cents': number;
    'currencyIso': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cents",
            "baseName": "cents",
            "type": "number"
        },
        {
            "name": "currencyIso",
            "baseName": "currency_iso",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClickFunnelOriginalAmount.attributeTypeMap;
    }
}

