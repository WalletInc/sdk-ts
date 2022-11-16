/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTAdvertisementCreditCreateParams {
    'title': string;
    'valueType': string | null;
    'paymentDesignID': string;
    'maxUses': number;
    'discountValue': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
            "type": "string"
        },
        {
            "name": "maxUses",
            "baseName": "maxUses",
            "type": "number"
        },
        {
            "name": "discountValue",
            "baseName": "discountValue",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WTAdvertisementCreditCreateParams.attributeTypeMap;
    }
}

