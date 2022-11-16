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

export class WTWalletItemRedemption {
    'checkAmount': number;
    'transactionNumber': string;
    'metaValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkAmount",
            "baseName": "checkAmount",
            "type": "number"
        },
        {
            "name": "transactionNumber",
            "baseName": "transactionNumber",
            "type": "string"
        },
        {
            "name": "metaValue",
            "baseName": "metaValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTWalletItemRedemption.attributeTypeMap;
    }
}

