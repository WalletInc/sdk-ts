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

export class WTBillingSavePaymentMethod {
    'paymentMethodID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethodID",
            "baseName": "paymentMethodID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTBillingSavePaymentMethod.attributeTypeMap;
    }
}

